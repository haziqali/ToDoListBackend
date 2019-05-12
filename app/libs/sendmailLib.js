const nodemailer = require('nodemailer');
const mongoose = require('mongoose');
const async = require('async');
const User = mongoose.model('User');
const crypto = require('crypto');
const bcrypt = require('bcrypt');
const response = require('./../libs/responseLib');

let smtpTransport = nodemailer.createTransport({
    host: 'smtp.mail.yahoo.com',
    port: 465,
    service:'yahoo',
    secure: false,
    auth: {
      user: 'todolistmanagement@yahoo.com',
      pass: 'faynnrmcvzxpkapd'
    }
  });

let forgot_password = function(req, res) {

    async.waterfall([
      function(done) {
        User.findOne({
          email: req.body.email
        }).exec(function(err, user) {
          if (user) {
            done(err, user);
          } else {
            done('User not found.');
          }
        });
      },
      function(user, done) {
        // create the random token
        crypto.randomBytes(20, function(err, buffer) {
          var token = buffer.toString('hex');
          done(err, user, token);
        });
      },
      function(user, token, done) {
        User.findOneAndUpdate({ userId: user.userId }, 
            { resetPasswordToken: token, resetPasswordExpires: Date.now() + 86400000 }, 
            { upsert: true, new: true }).exec(function(err, new_user) {
          done(err, token, new_user);
        });
      },
      function(token, user, done) {
        var data = {
            from: 'todolistmanagement@yahoo.com',
            to: user.email,
            subject: 'Reset Password for List Management',
            text: 'Hi ' + user.firstName + ' ! \n\n You are receiving this because you have requested the reset of the password for your account.\n\n' +
            'Please click on the following link, or paste this into your browser to complete the process:\n\n' +
            'http://' + 'thedailytaskexecutor.tk' + '/resetpassword/' + token + '\n\n' +
            'If you did not request this, please ignore this email and your password will remain unchanged.\n'
         
        };
  
        smtpTransport.sendMail(data, function(err) {
          if (!err) {
            let apiResponse = response.generate(false, 'Kindly check your email for further instructions', 200, null);
            res.send(apiResponse);
          } else {
            console.log(err)
            let apiResponse = response.generate(true, 'Some error occured while trying to send mail', 500, null);
            res.send(apiResponse);
          }
        });
      }
    ], function(err) {
        let apiResponse = response.generate(true, err, 422, null);
        res.send(apiResponse);
    });
  };

  let reset_password = function(req, res) {
    User.findOne({
      resetPasswordToken: req.body.token,
      resetPasswordExpires: {
        $gt: Date.now()
      }
    }).exec(function(err, user) {
      if (!err && user) {
        if (req.body.password === req.body.confirmPassword) {
          user.password = bcrypt.hashSync(req.body.password, 10);
          user.resetPasswordToken = undefined;
          user.resetPasswordExpires = undefined;
          user.save(function(err) {
            if (err) {
                let apiResponse = response.generate(true, err, 422, null);
                res.send(apiResponse);
              
            } else {
              var data = {
                to: user.email,
                from: 'todolistmanagement@yahoo.com',
                subject: 'Password Reset Confirmation',
                text: `Hi ${user.firstName}! \n\n
                Your password has been successfully reset. You can now login with your new password.`
              }

              smtpTransport.sendMail(data, function(err) {
                if (!err) {
                    let apiResponse = response.generate(false, 'Password reset successfully', 200, null);
                     res.send(apiResponse);
                } else {
                    let apiResponse = response.generate(true, err, 422, null);
                    res.send(apiResponse);
                }
              });
            }
          });
        } else {
            let apiResponse = response.generate(true, "Passwords do not match", 422, null);
            res.send(apiResponse);
        }
      } else {
        let apiResponse = response.generate(true, "Password reset token is invalid or expired", 422, null);
        res.send(apiResponse);
      }
    });
  };

module.exports = {
      forgot_password: forgot_password,
      reset_password: reset_password
  }