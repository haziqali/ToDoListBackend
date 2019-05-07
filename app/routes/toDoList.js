const listController = require("./../../app/controllers/toDoListController");
const appConfig = require("./../../config/appConfig");
const auth = require('./../middlewares/auth');

module.exports.setRouter = (app) => {

    let baseUrl = `${appConfig.apiVersion}/lists`;

    app.get(`${baseUrl}/view/all`, auth.isAuthorized, listController.getAllLists);
    app.post(`${baseUrl}/createList`, auth.isAuthorized, listController.createListFunction);
    app.post(`${baseUrl}/addItem`, auth.isAuthorized, listController.addItem);
    app.get(`${baseUrl}/:listName`, auth.isAuthorized, listController.getList);

    

    

   

}
