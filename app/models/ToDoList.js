const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ToDoList = new Schema({
    name: {
        type: String,
        default: '',
        unique: true
      },
    listItems:[{
        text: String,
        },
      {
        edit: Boolean,
        default:false
      }],
    doneListItems:[{
      text: String,
      }]
    
})

module.exports = mongoose.model('ToDoList', ToDoList);
