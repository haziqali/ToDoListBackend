const listController = require("./../../app/controllers/toDoListController");
const appConfig = require("./../../config/appConfig");
const auth = require('./../middlewares/auth');

module.exports.setRouter = (app) => {

    let baseUrl = `${appConfig.apiVersion}/lists`;
    app.post(`${baseUrl}/view/all`, auth.isAuthorized, listController.getAllLists);
    app.post(`${baseUrl}/editItem`, auth.isAuthorized, listController.editItem);
    app.post(`${baseUrl}/clearAll`, auth.isAuthorized, listController.clearAllItems);
    app.post(`${baseUrl}/clearActiveItems`, auth.isAuthorized, listController.clearActiveItems);
    app.post(`${baseUrl}/clearDoneItems`, auth.isAuthorized, listController.clearDoneItems);
    app.post(`${baseUrl}/createList`, auth.isAuthorized, listController.createListFunction);
    app.post(`${baseUrl}/addItem`, auth.isAuthorized, listController.addItem);
    app.post(`${baseUrl}/deleteItem`, auth.isAuthorized, listController.deleteItem);
    app.post(`${baseUrl}/doneItem`, auth.isAuthorized, listController.doneItem);
    app.post(`${baseUrl}/:listName`, auth.isAuthorized, listController.getList);
    
   


    

    

   

}
