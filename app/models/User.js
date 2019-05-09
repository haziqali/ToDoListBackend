'use strict'
/**
 * Module Dependencies
 */
const mongoose = require('mongoose'),
  Schema = mongoose.Schema;

let userSchema = new Schema({
  userId: {
    type: String,
    default: '',
    unique: true
  },
  firstName: {
    type: String,
    default: ''
  },
  lastName: {
    type: String,
    default: ''
  },
  password: {
    type: String,
    default: ''
  },
  email: {
    type: String,
    default: '',
    unique: true
  },
  mobileNumber: {
    type: String,
    default: ''
  },
  createdOn :{
    type:Date,
    default:""
  },
  resetPasswordToken: {
    type: String,
    default: ''
  },
  resetPasswordExpires: {
    type: String,
    default: ''
  },
  friendRequests: [{
    _id: String,
    email: String,
    firstName: String,
    lastName: String
  }],
  friends: [{
    _id: String,
    email: String,
    firstName: String,
    lastName: String
  }]


})


mongoose.model('User', userSchema);