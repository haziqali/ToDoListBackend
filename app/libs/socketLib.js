/**
 * modules dependencies.
 */
const socketio = require('socket.io');
const mongoose = require('mongoose');
const logger = require('./loggerLib.js');
const events = require('events');
const eventEmitter = new events.EventEmitter();

const tokenLib = require("./tokenLib.js");
const check = require("./checkLib.js");
const response = require('./responseLib')
const UserModel = mongoose.model('User');

let setServer = (server) => {

    let allOnlineUsers = []

    let io = socketio.listen(server);

    let myIo = io.of('/');

    myIo.on('connection',(socket) => {

        console.log("on connection--emitting verify user");

        socket.emit("verifyUser", "");

        // code to verify the user and make him online

        socket.on('set-user',(authToken) => {

            console.log("set-user called")
            tokenLib.verifyClaimWithoutSecret(authToken,(err,user)=>{
                if(err){
                    socket.emit('auth-error', { status: 500, error: 'Please provide correct auth token' })
                }
                else{     
                    console.log("user is verified..setting details");
                    let currentUser = user.data;  
                    // setting socket user id 
                    socket.userId = currentUser.userId
                    socket.email = currentUser.email
                    let fullName = `${currentUser.firstName} ${currentUser.lastName}`
                    socket.room = `${currentUser.email}`;
                    socket.join(socket.room)
                    socket.to(socket.room).broadcast.emit('new-user-online',`${fullName} is online`);
                    let userObj = {userId:currentUser.userId,fullName:fullName}
                    allOnlineUsers.push(userObj)
                    console.log(allOnlineUsers)
                   
                    socket.to(socket.room).broadcast.emit('online-user-list',allOnlineUsers);

                }


            })
          
        }) // end of listening set-user event

        socket.on('friend-request',(data, authToken) => {
            console.log("friend-request called")
            tokenLib.verifyClaimWithoutSecret(authToken,(err,user)=>{
                if(err){
                    socket.emit('auth-error', { status: 500, error: 'Please provide correct auth token' })
                }
                else{
                    console.log("sending Friend Request");
                    let currentUser = user.data; 
                    let fullName = `${currentUser.firstName} ${currentUser.lastName}`
                    socket.to(`${data.receiverMail}`).broadcast.emit('new-user-online',`Friend Request recieved from ${fullName}`);
                    eventEmitter.emit('save-friend-request', data);
                    console.log(`${data.senderMail}-friend-request-sent`);
                    myIo.emit(`${data.senderMail}-friend-request-sent`, `Your friend request has been sucessfully sent to ${data.receiverMail}`);

                   
                }
            })   
        })

        socket.on('friend-request-accepted',(data, authToken) => {    
                    console.log("socket event: friend-request-accepted");
        
                    eventEmitter.emit('accept-friend-request', data);
                    console.log(`${data.senderMail}-friend-request-accepted-db`);
                    myIo.emit(`${data.senderMail}-friend-request-accepted-db`, `${data.receiverMail} has been sucessfully added to your friend list.`);
                    myIo.emit(`${data.receiverMail}-friend-request-accepted-db`, `${data.senderMail} has been sucessfully added to your friend list.`);

                   
                
            });

            socket.on('disconnect', () => {
                // disconnect the user from socket
                // remove the user from online list
                // unsubscribe the user from his own channel
    
                console.log("user is disconnected");
                // console.log(socket.connectorName);
                console.log(socket.userId);
                var removeIndex = allOnlineUsers.map(function(user) { return user.userId; }).indexOf(socket.userId);
                allOnlineUsers.splice(removeIndex,1)
                console.log(allOnlineUsers)
                socket.to(socket.room).broadcast.emit('online-user-list',allOnlineUsers);
                socket.leave(socket.room)
            });
        })


       // end of on disconnect
 


eventEmitter.on('save-friend-request', (data) => {

    // let today = Date.now();
    console.log(data);
    UserModel.update({ 'email': data.receiverMail }, {$addToSet: {friendRequests: {_id : 123, email : data.senderMail, firstName: data.senderFirstName, lastName: data.senderLastname}}}).exec((err, result) => {
        if (err) {
            console.log(err)
            
        } else if (check.isEmpty(result)) {
            logger.info('No User Found', 'User Controller: editUser')
           
        } else {
            logger.info('Friend request sent');
          
            
        }
    })

});

eventEmitter.on('accept-friend-request', (data) => {

    // let today = Date.now();
    console.log(data);
    UserModel.update({ 'email': data.receiverMail }, {$addToSet: {friends: {_id : 123, email : data.senderMail, firstName: data.senderFirstName, lastName: data.senderLastname}}}).exec((err, result) => {
        if (err) {
            console.log(err)
            
        } else if (check.isEmpty(result)) {
            logger.info('No User Found', 'User Controller: editUser')
           
        } else {
            logger.info('Friend request accepted');
            UserModel.update({ 'email': data.senderMail }, {$addToSet: {friends: {_id : 123, email : data.receiverMail, firstName: data.receiverFirstName, lastName: data.receiverLastname}}}).exec((err, result));
            UserModel.update({ 'email': data.senderMail }, {$pull: {friendRequests: {_id : 123, email : data.receiverMail, firstName: data.receiverFirstName, lastName: data.receiverLastname}}}).exec((err, result));
            
        }
    })

});

}

module.exports = {
    setServer: setServer
}
