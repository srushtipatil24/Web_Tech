//Handling Request and Response 
//express application handles http request and response
//Request - information sent by client to server ex: url,headers,request word, query parameters
//Response - information sent by server to client

const express = require("express");
const app = express();
const port = 3005;

 app.get("/", (req, res) => {
    console.log("Request query name")});
//write 2 or 4 examaples of query parameters
//understand query parameters and why we use them real world example 


//Response - information sent by server to client
//common response methods - res.send(), res.json(), res.status()
//res.send() - send a string or buffer as response
//res.json() - send a json object as response
//res.status() - set the status code of the response
//res.send() - send a string or buffer as response
  