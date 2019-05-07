const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ToDoList = new Schema({
    name: {
        type: String,
        default: ''
      },
    listItems:[{
        text: String,
        }]
    
})

module.exports = mongoose.model('ToDoList', ToDoList);
