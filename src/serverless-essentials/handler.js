"use strict";
const AWS = require("aws-sdk");
const db = new AWS.DynamoDB.DocumentClient({ apiVersion: "2012-08-10" });
//const uuid = require("uuid/v4");

const
const userTable = process.env.USER_TABLE;

const ContentTable = process.env.CONTENT_TABLE;
// create a response
function response(statusCode, message) {
  return {
    statusCode: statusCode,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "*"
    },
    body: JSON.stringify(message)
  };
}
// sorts by date
function sortByDate(a, b) {
  if (a.createdAt > b.createdAt) {
    return -1;
  } else {
    return 1;
  }
}
// // create a user
// module.exports.createUser = (event, context, callback) => {
//   const reqBody = JSON.parse(event.body);

//   const user = {
//     id: uuid(),
//     createdAt: new Date().toISOString(),
//     title: reqBody.title,
//     body: reqBody.body
//   };

//   return db
//     .put({
//       TableName: userTable,
//       Item: user
//     })
//     .promise()
//     .then(() => {
//       callback(null, response(201, user));
//     })
//     .catch(err => response(null, response(err.statusCode, err)));
// };

// // get all users

// module.exports.getAllUsers = (event, context, callback) => {
//   return db
//     .scan({
//       TableName: userTable
//     })
//     .promise()
//     .then(res => {
//       callback(null, response(200, res.Items.sort(sortByDate)));
//     })
//     .catch(err => callback(null, response(err.statusCode, err)));
// };

//Create content
// module.exports.createCategory = async(event, context, callback) => {
//   exports.handler = async (event, context) => {
//     const documentClient = new AWS.DynamoDB.DocumentClient();

//     let responseBody = "";
//     let statusCode = 0;

//     const { id, content } =event;
//     console.log("e details:::::")
//     console.log(event);
//   console.log(id)
//     const params = {
//       TableName: ContentTable,
//       Item: {
//         id: id,
//         content:content
//       }
//     };

//     try {
//       const data = await documentClient.put(params).promise();
//       responseBody = JSON.stringify(data);
//       statusCode = 201;
//     } catch(err) {
//       responseBody = `Unable to put product: ${err}`;
//       statusCode = 403;
//     }

//     const response = {
//       statusCode: statusCode,
//       headers: {
//         "Content-Type": "application/json",
//         "access-control-allow-origin":"*"
//       },
//       body: responseBody
//     };

//     return response;
//   };
// }
// module.exports.createCategory = async (event, context, callback) => {
//     const documentClient = new AWS.DynamoDB.DocumentClient();

//     const {id,content} = event;
// console.log("event content");
// console.log(content);
// const post = {
//     id: "1231",
//     content:"New content created"
//   };

//   return db
//     .put({
//       TableName: ContentTable,
//       Item: post
//     })
//     .promise()
//     .then(() => {
//       callback(null, response(201, post));
//     })
//     .catch((err) => response(null, response(err.statusCode, err)));
//   };

// module.exports.getAllContent = async (event, context, callback) => {
//   const documentClient = new AWS.DynamoDB.DocumentClient();

//   let responseBody = "";
//   let statusCode = 0;

//   const params = {
//     TableName: ContentTable
//   };

//   try {
//     const data = await documentClient.scan(params).promise();
//     responseBody = JSON.stringify(data.Items);
//     statusCode = 200;
//   } catch (err) {
//     responseBody = `Unable to get products: ${err}`;
//     statusCode = 403;
//   }

//   const response = {
//     statusCode: statusCode,
//     headers: {
//       "Content-Type": "application/json",
//       "access-control-allow-origin": "*"
//     },
//     body: responseBody
//   };

//   return response;
//};

module.exports.getContent = async(event, context,callback) => {
  const documentClient = new AWS.DynamoDB.DocumentClient();

  let responseBody = "";
  let statusCode = 0;
  const { id,content } = JSON.parse(event.body);
        console.log("id")
        console.log(id)
  const params = {
    TableName: "ContentTable",
    id:id
  };

  try {
    const data = await documentClient.scan(params).promise();
    responseBody = JSON.stringify(data.Items);
    statusCode = 200;
  } catch(err) {
    responseBody = `Unable to get content: ${err}`;
    statusCode = 403;
  }

  const response = {
    statusCode: statusCode,
    headers: {
      "Content-Type": "application/json",
      "access-control-allow-origin": "*"
    },
    body: responseBody
  };

console.log("response");
console.log(response)
  return response;

};




