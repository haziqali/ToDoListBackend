const listController = require("./../../app/controllers/toDoListController");
const appConfig = require("./../../config/appConfig");
const auth = require('./../middlewares/auth');

module.exports.setRouter = (app) => {

    let baseUrl = `${appConfig.apiVersion}/lists`;

    app.get(`${baseUrl}/view/all`, auth.isAuthorized, listController.getAllLists);
    app.post(`${baseUrl}/createList`, auth.isAuthorized, listController.createListFunction);
    app.post(`${baseUrl}/addItem`, auth.isAuthorized, listController.addItem);
    app.post(`${baseUrl}/deleteItem`, auth.isAuthorized, listController.deleteItem);
    app.post(`${baseUrl}/doneItem`, auth.isAuthorized, listController.doneItem);
    app.get(`${baseUrl}/:listName`, auth.isAuthorized, listController.getList);
    app.post(`${baseUrl}/clearAll`, auth.isAuthorized, listController.clearAll);
    app.post(`${baseUrl}/clearActiveItems`, auth.isAuthorized, listController.clearActiveItems);
    app.post(`${baseUrl}/clearDoneItems`, auth.isAuthorized, listController.clearDoneItems);
    app.post(`${baseUrl}/editItem`, auth.isAuthorized, listController.editItem);


    

    

   

}
