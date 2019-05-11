const listController = require("./../../app/controllers/toDoListController");
const appConfig = require("./../../config/appConfig");
const auth = require('./../middlewares/auth');

module.exports.setRouter = (app) => {

    
    let baseUrl = `${appConfig.apiVersion}/lists`;

    /**
     * @apiGroup lists
     * @apiVersion  1.0.0
     * @api {post} /api/v1/lists/view/all api for viewing all lists.
     *
     * @apiParam {string} [users] Stringified array of users which can access the list. (body params) (required)
     *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
        {   error: false, 
            message: "List Details Found", 
            status: 200, 
            data: {users: Array(3), doneListItems: Array(0), listItems: Array(0), name: "qwe"}
                  {users: Array(1), doneListItems: Array(0), listItems: Array(19), name: "a"}
                  {users: Array(1), doneListItems: Array(0), listItems: Array(1), name: "asd"},
     
    */
    app.post(`${baseUrl}/view/all`, auth.isAuthorized, listController.getAllLists);


    /**
     * @apiGroup lists
     * @apiVersion  1.0.0
     * @api {post} /api/v1/lists/editItem api for editing list.
     *
     * @apiParam {string} name Name of the list. (body params) (required)
     * @apiParam {string} oldValue old value in the list. (body params) (required)
     * @apiParam {string} newValue new value in the the list. (body params) (required)
     *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
     * {
            {n: 1, nModified: 1, ok: 1}
                error: false
                message: "List Item edited sucessfully"
                status: 200
        }
     
    */

    
    app.post(`${baseUrl}/editItem`, auth.isAuthorized, listController.editItem);


    /**
     * @apiGroup lists
     * @apiVersion  1.0.0
     * @api {post} /api/v1/lists/clearAll api for clearing list.
     * @apiParam {string}name Name of the list. (body params) (required)
     * 
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
        { error: false,
        message: 'Cleared all items',
        status: 200,
        data: { n: 1, nModified: 0, ok: 1 } 
        }
     
    */
    app.post(`${baseUrl}/clearAll`, auth.isAuthorized, listController.clearAllItems);

    /**
     * @apiGroup lists
     * @apiVersion  1.0.0
     * @api {post} /api/v1/lists/clearActiveItems api for clearing active items in list.
     * @apiParam {string}name Name of the list. (body params) (required)
     * 
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
        { error: false,
        message: 'Cleared active items',
        status: 200,
        data: { n: 1, nModified: 0, ok: 1 } 
        }
     
    */
    app.post(`${baseUrl}/clearActiveItems`, auth.isAuthorized, listController.clearActiveItems);

    /**
     * @apiGroup lists
     * @apiVersion  1.0.0
     * @api {post} /api/v1/lists/clearDoneItems api for clearing completed items in list.
     * @apiParam {string}name Name of the list. (body params) (required)
     * 
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
        { error: false,
        message: 'Cleared done items',
        status: 200,
        data: { n: 1, nModified: 0, ok: 1 } 
        }
     
    */
    app.post(`${baseUrl}/clearDoneItems`, auth.isAuthorized, listController.clearDoneItems);


    /**
     * @apiGroup lists
     * @apiVersion  1.0.0
     * @api {post} /api/v1/lists/createList api for clearing completed items in list.
     * @apiParam {string}name Name of the list. (body params) (required)
     * 
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
        {  authToken:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqd3RpZCI6Ik4yZjZuVk51eCIsImlhdCI6MTU1NzYwMjEwNzIxNCwiZXhwIjoxNTU3Njg4NTA3LCJzdWIiOiJhdXRoVG9rZW4iLCJpc3MiOiJlZENoYXQiLCJkYXRhIjp7ImZyaWVuZHMiOlt7Imxhc3ROYW1lIjoicSIsImZpcnN0TmFtZSI6InEiLCJlbWFpbCI6InFAZ21haWwuY29tIiwiX2lkIjoiMTIzIn0seyJsYXN0TmFtZSI6InciLCJmaXJzdE5hbWUiOiJ3IiwiZW1haWwiOiJ3QHcuY29tIiwiX2lkIjoiMTIzIn0seyJsYXN0TmFtZSI6ImEiLCJmaXJzdE5hbWUiOiJhIiwiZW1haWwiOiJhQGEuY29tIiwiX2lkIjoiMTIzIn0seyJsYXN0TmFtZSI6ImQiLCJmaXJzdE5hbWUiOiJkIiwiZW1haWwiOiJkQGQuY29tIiwiX2lkIjoiMTIzIn0seyJsYXN0TmFtZSI6InYiLCJmaXJzdE5hbWUiOiJ2IiwiZW1haWwiOiJ2QHYuY29tIiwiX2lkIjoiMTIzIn0seyJsYXN0TmFtZSI6ImIiLCJmaXJzdE5hbWUiOiJiIiwiZW1haWwiOiJiQGIuY29tIiwiX2lkIjoiMTIzIn1dLCJmcmllbmRSZXF1ZXN0cyI6W10sInJlc2V0UGFzc3dvcmRFeHBpcmVzIjoiIiwicmVzZXRQYXNzd29yZFRva2VuIjoiIiwibW9iaWxlTnVtYmVyIjoiIDkxODEzMDM3MjI0MiIsImVtYWlsIjoic2FtLndhcy5zYW1teUBnbWFpbC5jb20iLCJsYXN0TmFtZSI6IkFsaSIsImZpcnN0TmFtZSI6IkhhemlxIiwidXNlcklkIjoiNFExd2RWSktSIn19.XdptGShLaikt68rLtDEI9gLgG4FefWDKanSe23foBEk',
        name: 'asdasdsad',
        users:
        '["q@gmail.com"]' }
            { error: false,
        message: 'List created',
        status: 200,
        data:
        { __v: 0,
            _id: 5cd727c81e3b352aa436ec5e,
            users:
            [ 'q@gmail.com',
                'w@w.com',
                'a@a.com',
                'd@d.com',
                'v@v.com',
                'b@b.com',
                'sam.was.sammy@gmail.com' ],
            doneListItems: [],
            listItems: [],
            name: 'asdasdsad' } }
     
    */
    app.post(`${baseUrl}/createList`, auth.isAuthorized, listController.createListFunction);


    app.post(`${baseUrl}/clearActiveItems`, auth.isAuthorized, listController.clearActiveItems);

    /**
     * @apiGroup lists
     * @apiVersion  1.0.0
     * @api {post} /api/v1/lists/addItem api for adding items in list.
     * @apiParam {string} name  Name of the list. (body params) (required)
     * @apiParam {string} listItem Name of the item. (body params) (required)
     * 
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
        { error: false,
        message: 'Added list item',
        status: 200,
        data: { n: 1, nModified: 0, ok: 1 } 
        }
     
    */
    app.post(`${baseUrl}/addItem`, auth.isAuthorized, listController.addItem);


      /**
     * @apiGroup lists
     * @apiVersion  1.0.0
     * @api {post} /api/v1/lists/deleteItem api for deleting items in list.
     * @apiParam {string} name Name of the list. (body params) (required)
     * @apiParam {string} listName Name of the item. (body params) (required)
     * 
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
        { error: false,
        message: 'Added list item',
        status: 200,
        data: { n: 1, nModified: 0, ok: 1 } 
        }
     
    */
    app.post(`${baseUrl}/deleteItem`, auth.isAuthorized, listController.deleteItem);


      /**
     * @apiGroup lists
     * @apiVersion  1.0.0
     * @api {post} /api/v1/lists/doneItem api for marking items in list as complete.
     * @apiParam {string} name Name of the list. (body params) (required)
     * @apiParam {string} listName Name of the item. (body params) (required)
     * 
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
        { error: false,
        message: 'item marked as complete',
        status: 200,
        data: { n: 1, nModified: 0, ok: 1 } 
        }
     
    */
    app.post(`${baseUrl}/doneItem`, auth.isAuthorized, listController.doneItem);


       /**
     * @apiGroup lists
     * @apiVersion  1.0.0
     * @api {post} /api/v1/lists/:listName api for marking items in list as complete.
     * @apiParam name {string} Name of the list. (body params) (required)
     * 
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
        data: {users: Array(3), doneListItems: Array(0), listItems: Array(0), name: "qwe"}
        error: false
        message: "List Found"
        status: 200
    */
    app.post(`${baseUrl}/:listName`, auth.isAuthorized, listController.getList);
    



   
   


    

    

   

}
