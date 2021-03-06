const mongoose = require('mongoose');
const response = require('../libs/responseLib')
const logger = require('../libs/loggerLib');
const check = require('../libs/checkLib');




/* Models */
const listModel = mongoose.model('ToDoList')



/* Get all user Details */
let getAllLists = (req, res) => {

    listModel.find({ users: { $in: JSON.parse(req.body.users) }})
        .select(' -__v -_id')
        .lean()
        .exec((err, result) => {
            if (err) {
                console.log(err)
                logger.error(err.message, 'ToDoList Controller: getAllLists', 10)
                let apiResponse = response.generate(true, 'Failed To Find List Details', 500, null)
                res.send(apiResponse)
            } else if (check.isEmpty(result)) {
                logger.info('No List Found', 'ToDoList Controller: getAllLists')
                let apiResponse = response.generate(true, 'No List Found', 404, null)
                res.send(apiResponse)
            } else {
                let apiResponse = response.generate(false, 'List Details Found', 200, result)
                res.send(apiResponse)
            }
        })
}// end get all users

let createListFunction = (req, res) => {

    let validateList = () => {
        return new Promise((resolve, reject) => {
            if (req.body.name) {
                    resolve(req)

            } else {
                logger.error('List is empty', 'createList()', 5)
                let apiResponse = response.generate(true, 'One or More Parameter(s) is missing', 400, null)
                reject(apiResponse)
            }
        })
    }// end validate user input
    let createList = () => {
        return new Promise((resolve, reject) => {
            listModel.findOne({ name: req.body.name })
                .exec((err, retrievedUserDetails) => {
                    if (err) {
                        logger.error(err.message, 'listController: createList', 10)
                        let apiResponse = response.generate(true, 'Failed To Create List', 500, null)
                        reject(apiResponse)
                    } else if (check.isEmpty(retrievedUserDetails)) {
                      
                        let newList = new listModel({  
                            name: req.body.name,
                            users: JSON.parse(req.body.users)
                        })
                        newList.save((err, newList) => {
                            if (err) {
                                console.log(err)
                                logger.error(err.message, 'toDoListController: createList', 10)
                                let apiResponse = response.generate(true, 'Failed to create List', 500, null)
                                reject(apiResponse)
                            } else {
                                let newListObj = newList.toObject();
                                resolve(newListObj)
                            }
                        })
                    } else {
                        logger.error('List with this name is already present', 'toDoListController: createList', 4)
                        let apiResponse = response.generate(true, 'List with this name is already present', 403, null)
                        reject(apiResponse)
                    }
                })
        })
    }// end create user function


    validateList(req, res)
        .then(createList)
        .then((resolve) => {
            let apiResponse = response.generate(false, 'List created', 200, resolve)
            res.send(apiResponse)
        })
        .catch((err) => {
            console.log(err);
            res.send(err);
        })

}


let getList = (req, res) => {

    listModel.findOne({ 'name': req.body.name,'users': { $in: JSON.parse(req.body.users) }})
        .select('-__v -_id')
        .lean()
        .exec((err, result) => {
            if (err) {
                console.log(err)
                logger.error(err.message, 'List Controller: getList', 10)
                let apiResponse = response.generate(true, 'Failed To Find List', 500, null)
                res.send(apiResponse)
            } else if (check.isEmpty(result)) {
                logger.info('No List Found', 'List Controller:getList')
                let apiResponse = response.generate(true, 'No List Found', 404, null)
                res.send(apiResponse)
            } else {
                let apiResponse = response.generate(false, 'List Found', 200, result)
                res.send(apiResponse)
            }
        })
}

let addItem = (req, res) => {
 
    listModel.update({ 'name':req.body.listName}, {$push: {listItems: {text:req.body.listItems}}}).exec((err, result) => {
        if (err) {
            console.log(err)
            logger.error(err.message, 'List Controller: addItem', 10)
            let apiResponse = response.generate(true, 'Failed To edit List details', 500, null)
            res.send(apiResponse)
        } else if (check.isEmpty(result)) {
          
            logger.info('No List Found', 'List Controller: addItem')
            let apiResponse = response.generate(true, 'No List Found', 404, null)
            res.send(apiResponse)
        } else {
            let apiResponse = response.generate(false, 'Item added', 200, result)
            res.send(apiResponse)
        }
    });
}

let deleteItem = (req, res) => {

    listModel.update({ 'name': req.body.listName }, {$pull: {listItems: { text: req.body.listItems}}}).exec((err, result) => {
        if (err) {
            console.log(err)
            logger.error(err.message, 'List Controller: addItem', 10)
            let apiResponse = response.generate(true, 'Failed To edit List details', 500, null)
            res.send(apiResponse)
        } else if (check.isEmpty(result)) {
            logger.info('No List Found', 'List Controller: addItem')
            let apiResponse = response.generate(true, 'No List Found', 404, null)
            res.send(apiResponse)
        } else {
            let apiResponse = response.generate(false, 'List item deleted', 200, result)
            res.send(apiResponse)
        }
    });
}

let doneItem = (req, res) => {
    
    listModel.update({ 'name': req.body.listName }, {$pull: {listItems: { text: req.body.listItems}}}).exec((err, result) => {
        if (err) {
            console.log(err)
            logger.error(err.message, 'List Controller: addItem', 10)
            let apiResponse = response.generate(true, 'Failed To edit List details', 500, null)
            res.send(apiResponse)
        } else if (check.isEmpty(result)) {
            logger.info('No List Found', 'List Controller: addItem')
            let apiResponse = response.generate(true, 'No List Found', 404, null)
            res.send(apiResponse)
        } else {
            listModel.update({ 'name': req.body.listName }, {$push: {doneListItems: { text: req.body.listItems}}}).exec((err, result) => {
                if (err) {
                    console.log(err)
                    logger.error(err.message, 'List Controller: addItem', 10)
                    let apiResponse = response.generate(true, 'Failed To edit List details', 500, null)
                    res.send(apiResponse)
                } else if (check.isEmpty(result)) {
                    logger.info('No List Found', 'List Controller: addItem')
                    let apiResponse = response.generate(true, 'List item deleted but failed to mark as done', 404, null)
                    res.send(apiResponse)
                } else {
                    let apiResponse = response.generate(false, 'Marked as done', 200, result)
                    res.send(apiResponse)
                }
            });
            
        }
    });
}


let clearActiveItems = (req, res) => {
    listModel.update({ 'name': req.body.listName }, {$set: { listItems: [] }}).exec((err, result) => {
        if (err) {
            console.log(err)
            logger.error(err.message, 'List Controller: addItem', 10)
            let apiResponse = response.generate(true, 'Failed To edit List details', 500, null)
            res.send(apiResponse)
        } else if (check.isEmpty(result)) {
            logger.info('No List Found', 'List Controller: addItem')
            let apiResponse = response.generate(true, 'No List Found', 404, null)
            res.send(apiResponse)
        } else {
            let apiResponse = response.generate(false, 'Cleared all items', 200, result)
            res.send(apiResponse)
        }
    });
}
let clearAllItems = (req, res) => {
    listModel.update({ 'name':req.body.listName}, {$set: {listItems: [] }}).exec((err, result) => {
        if (err) {
            
            logger.error(err.message, 'List Controller: addItem', 10)
            let apiResponse = response.generate(true, 'Failed To edit List details', 500, null)
            res.send(apiResponse)
        } else if (check.isEmpty(result)) {
            logger.info('No List Found1', 'List Controller: addItem')
            let apiResponse = response.generate(true, 'No List Found1', 404, null)
            res.send(apiResponse)
        } else {
            listModel.update({ 'name': req.body.listName }, {$set: { doneListItems: [] }}).exec((err, result));
            let apiResponse = response.generate(false, 'Cleared all items', 200, result)
           
            res.send(apiResponse)
        }
    });
}

let clearDoneItems = (req, res) => {
    listModel.update({ 'name': req.body.listName }, {$set: { doneListItems: [] }}).exec((err, result) => {
        if (err) {
            console.log(err)
            logger.error(err.message, 'List Controller: addItem', 10)
            let apiResponse = response.generate(true, 'Failed To edit List details', 500, null)
            res.send(apiResponse)
        } else if (check.isEmpty(result)) {
            logger.info('No List Found', 'List Controller: addItem')
            let apiResponse = response.generate(true, 'No List Found', 404, null)
            res.send(apiResponse)
        } else {
            let apiResponse = response.generate(false, 'Cleared all items', 200, result)
            res.send(apiResponse)
        }
    });
}

let editItem = (req, res) => {
    
  
    listModel.update({ name: req.body.name, "listItems.text": req.body.oldValue }, { "$set": { 'listItems.$.text': req.body.newValue} }).exec((err, result) => {
        
        if (err) {
            console.log(err)
            logger.error(err.message, 'List Controller: editItem', 10)
            let apiResponse = response.generate(true, 'Failed To edit List details', 500, null)
            res.send(apiResponse)
        } else if (check.isEmpty(result)) {
        
            logger.info('No List Found', 'List Controller: addItem')
            let apiResponse = response.generate(true, 'No List Found', 404, null)
            res.send(apiResponse)
        } else {
            
            let apiResponse = response.generate(false, 'List Item edited sucessfully', 200, result)
            res.send(apiResponse)
        }
    });
}


module.exports = {

    
    getAllLists: getAllLists,
    createListFunction: createListFunction,
    getList: getList,
    addItem: addItem,
    deleteItem: deleteItem,
    doneItem: doneItem,
    clearAllItems: clearAllItems,
    clearDoneItems: clearDoneItems,
    clearActiveItems: clearActiveItems,
    editItem: editItem
    

}// end exports