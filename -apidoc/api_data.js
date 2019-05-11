define({ "api": [
  {
    "group": "lists",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/lists/addItem",
    "title": "api for adding items in list.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the list. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "listItem",
            "description": "<p>Name of the item. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{ error: false,\nmessage: 'Added list item',\nstatus: 200,\ndata: { n: 1, nModified: 0, ok: 1 } \n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/toDoList.js",
    "groupTitle": "lists",
    "name": "PostApiV1ListsAdditem"
  },
  {
    "group": "lists",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/lists/clearActiveItems",
    "title": "api for clearing active items in list.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the list. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{ error: false,\nmessage: 'Cleared active items',\nstatus: 200,\ndata: { n: 1, nModified: 0, ok: 1 } \n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/toDoList.js",
    "groupTitle": "lists",
    "name": "PostApiV1ListsClearactiveitems"
  },
  {
    "group": "lists",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/lists/clearAll",
    "title": "api for clearing list.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the list. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{ error: false,\nmessage: 'Cleared all items',\nstatus: 200,\ndata: { n: 1, nModified: 0, ok: 1 } \n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/toDoList.js",
    "groupTitle": "lists",
    "name": "PostApiV1ListsClearall"
  },
  {
    "group": "lists",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/lists/clearDoneItems",
    "title": "api for clearing completed items in list.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the list. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{ error: false,\nmessage: 'Cleared done items',\nstatus: 200,\ndata: { n: 1, nModified: 0, ok: 1 } \n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/toDoList.js",
    "groupTitle": "lists",
    "name": "PostApiV1ListsCleardoneitems"
  },
  {
    "group": "lists",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/lists/createList",
    "title": "api for clearing completed items in list.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the list. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{  authToken:\n'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqd3RpZCI6Ik4yZjZuVk51eCIsImlhdCI6MTU1NzYwMjEwNzIxNCwiZXhwIjoxNTU3Njg4NTA3LCJzdWIiOiJhdXRoVG9rZW4iLCJpc3MiOiJlZENoYXQiLCJkYXRhIjp7ImZyaWVuZHMiOlt7Imxhc3ROYW1lIjoicSIsImZpcnN0TmFtZSI6InEiLCJlbWFpbCI6InFAZ21haWwuY29tIiwiX2lkIjoiMTIzIn0seyJsYXN0TmFtZSI6InciLCJmaXJzdE5hbWUiOiJ3IiwiZW1haWwiOiJ3QHcuY29tIiwiX2lkIjoiMTIzIn0seyJsYXN0TmFtZSI6ImEiLCJmaXJzdE5hbWUiOiJhIiwiZW1haWwiOiJhQGEuY29tIiwiX2lkIjoiMTIzIn0seyJsYXN0TmFtZSI6ImQiLCJmaXJzdE5hbWUiOiJkIiwiZW1haWwiOiJkQGQuY29tIiwiX2lkIjoiMTIzIn0seyJsYXN0TmFtZSI6InYiLCJmaXJzdE5hbWUiOiJ2IiwiZW1haWwiOiJ2QHYuY29tIiwiX2lkIjoiMTIzIn0seyJsYXN0TmFtZSI6ImIiLCJmaXJzdE5hbWUiOiJiIiwiZW1haWwiOiJiQGIuY29tIiwiX2lkIjoiMTIzIn1dLCJmcmllbmRSZXF1ZXN0cyI6W10sInJlc2V0UGFzc3dvcmRFeHBpcmVzIjoiIiwicmVzZXRQYXNzd29yZFRva2VuIjoiIiwibW9iaWxlTnVtYmVyIjoiIDkxODEzMDM3MjI0MiIsImVtYWlsIjoic2FtLndhcy5zYW1teUBnbWFpbC5jb20iLCJsYXN0TmFtZSI6IkFsaSIsImZpcnN0TmFtZSI6IkhhemlxIiwidXNlcklkIjoiNFExd2RWSktSIn19.XdptGShLaikt68rLtDEI9gLgG4FefWDKanSe23foBEk',\nname: 'asdasdsad',\nusers:\n'[\"q@gmail.com\"]' }\n    { error: false,\nmessage: 'List created',\nstatus: 200,\ndata:\n{ __v: 0,\n    _id: 5cd727c81e3b352aa436ec5e,\n    users:\n    [ 'q@gmail.com',\n        'w@w.com',\n        'a@a.com',\n        'd@d.com',\n        'v@v.com',\n        'b@b.com',\n        'sam.was.sammy@gmail.com' ],\n    doneListItems: [],\n    listItems: [],\n    name: 'asdasdsad' } }",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/toDoList.js",
    "groupTitle": "lists",
    "name": "PostApiV1ListsCreatelist"
  },
  {
    "group": "lists",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/lists/deleteItem",
    "title": "api for deleting items in list.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the list. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "listName",
            "description": "<p>Name of the item. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{ error: false,\nmessage: 'Added list item',\nstatus: 200,\ndata: { n: 1, nModified: 0, ok: 1 } \n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/toDoList.js",
    "groupTitle": "lists",
    "name": "PostApiV1ListsDeleteitem"
  },
  {
    "group": "lists",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/lists/doneItem",
    "title": "api for marking items in list as complete.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the list. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "listName",
            "description": "<p>Name of the item. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{ error: false,\nmessage: 'item marked as complete',\nstatus: 200,\ndata: { n: 1, nModified: 0, ok: 1 } \n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/toDoList.js",
    "groupTitle": "lists",
    "name": "PostApiV1ListsDoneitem"
  },
  {
    "group": "lists",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/lists/editItem",
    "title": "api for editing list.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the list. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "oldValue",
            "description": "<p>old value in the list. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "newValue",
            "description": "<p>new value in the the list. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n            {n: 1, nModified: 1, ok: 1}\n                error: false\n                message: \"List Item edited sucessfully\"\n                status: 200\n        }",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/toDoList.js",
    "groupTitle": "lists",
    "name": "PostApiV1ListsEdititem"
  },
  {
    "group": "lists",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/lists/:listName",
    "title": "api for marking items in list as complete.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "name",
            "description": "<p>{string} Name of the list. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "data: {users: Array(3), doneListItems: Array(0), listItems: Array(0), name: \"qwe\"}\nerror: false\nmessage: \"List Found\"\nstatus: 200",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/toDoList.js",
    "groupTitle": "lists",
    "name": "PostApiV1ListsListname"
  },
  {
    "group": "lists",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/lists/view/all",
    "title": "api for viewing all lists.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "users",
            "description": "<p>Stringified array of users which can access the list. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{   error: false, \n    message: \"List Details Found\", \n    status: 200, \n    data: {users: Array(3), doneListItems: Array(0), listItems: Array(0), name: \"qwe\"}\n          {users: Array(1), doneListItems: Array(0), listItems: Array(19), name: \"a\"}\n          {users: Array(1), doneListItems: Array(0), listItems: Array(1), name: \"asd\"},",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/toDoList.js",
    "groupTitle": "lists",
    "name": "PostApiV1ListsViewAll"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/login",
    "title": "api for user login.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>password of the user. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"Login Successful\",\n    \"status\": 200,\n    \"data\": {\n        \"authToken\": \"eyJhbGciOiJIUertyuiopojhgfdwertyuVCJ9.MCwiZXhwIjoxNTIwNDI29tIiwibGFzdE5hbWUiE4In19.hAR744xIY9K53JWm1rQ2mc\",\n        \"userDetails\": {\n        \"mobileNumber\": 2234435524,\n        \"email\": \"someone@mail.com\",\n        \"lastName\": \"Sengar\",\n        \"firstName\": \"Rishabh\",\n        \"userId\": \"-E9zxTYA8\"\n    }\n\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "users",
    "name": "PostApiV1UsersLogin"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/login",
    "title": "api for user login.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userid",
            "description": "<p>userid of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>password of the user. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "     app.post(`${baseUrl}/signup`, userController.signUpFunction);\n\n/**",
          "type": "object"
        },
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"Logged Out Successfully\",\n    \"status\": 200,\n    \"data\": null\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "users",
    "name": "PostApiV1UsersLogin"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/signup",
    "title": "api for user signup.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "first",
            "description": "<p>name  of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "last",
            "description": "<p>name  of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "mobile",
            "description": "<p>password of the user. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"User created\",\n    \"status\": 200,\n    \"data\": {\n        \"__v\": 0,\n        \"_id\": \"5cd71b9b75a9f33a70094334\",\n        \"friends\": [],\n        \"friendRequests\": [],\n        \"resetPasswordExpires\": \"\",\n        \"resetPasswordToken\": \"\",\n        \"createdOn\": \"2019-05-11T18:59:39.000Z\",\n        \"mobileNumber\": \"\",\n        \"email\": \"hgh@gf.com\",\n        \"lastName\": \"jhg\",\n        \"firstName\": \"asd\",\n        \"userId\": \"72UylR956\"\n    }\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "users",
    "name": "PostApiV1UsersSignup"
  }
] });
