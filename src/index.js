const express = require("express");
const connect = require('./config/database.js');
const uploadQuotes=require('./scripts/uploadquotes.js');
const app = express();


app.listen(3001, async() => {
  console.log("server started");
  await connect();
  console.log('Mongo db connected');
  await uploadQuotes();
  
});

