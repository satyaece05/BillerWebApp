// //var firebase = require("firebase");
// var http = require('http');
// //var express = require('express');
// //var app = express();
// //var port = process.env.PORT || 9000;
// // var biller = require("./satya.json");
// // firebase.initializeApp(biller);
// var functions = require('firebase-functions');
// // var admin = require('firebase-admin');
// // var serviceAccount = require("./billerAppFirebaseConfig.json");
// // var billerApp = admin.initializeApp({
// //     credential: admin.credential.cert(serviceAccount),
// //     databaseURL: "https://biller-f2912.firebaseio.com"
// // }, "billerApp");

// exports.inventoryID = functions.https.onRequest((req, res) => 
// { 

//     var storeId=req.query.storeId;

//     console.log("Given Store ID is : " + storeId);
//     if(storeId!==undefined)
//     {
//         res.send(
//             "Given Store ID is : " + storeId);
//     }
//     else
//     {
//         // res.send("Here write in this way:" + "shop/?storeId = ***");
//     }
//     // const hours = (new Date().getHours() % 12) + 1 
//     // res.status(200).send(`<!doctype html>
//     //   <head>
//     //     <title>Time</title>
//     //   </head>
//     //   <body>
//     //     ${'BONG '.repeat(hours)}
//     //   </body>
//     // </html>`);
    
// });


var express = require('express');
var app = express();
var firebase = require('firebase');
var path = require('path');
var functions = require('firebase-functions');
var functions = require('firebase-functions');
var admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);
var serviceAccount = require("./billerAppFirebaseConfig.json");
var billerApp = admin.initializeApp({
	credential: admin.credential.cert(serviceAccount),
	databaseURL: "https://biller-f2912.firebaseio.com"
}, "billerApp");

exports.InventoryID = functions.https.onRequest((req, res) => 
{
	var storeID = req.query.storeID;
  return billerApp.database().ref('/StoreInfo').child("/storeID").once('value').then(function (storeSnapshot) 
  {
    res(storeSnapshot);
  }).catch(function () 
  {
  console.log("error");
  });
});