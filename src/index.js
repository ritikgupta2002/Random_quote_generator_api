const express = require("express");
const connect = require('./config/database.js');
const apiRoutes=require("./routes/index.js");
const app = express();

app.use("/api", apiRoutes);
app.listen(3001, async() => {
  console.log("server started");
  await connect();
  console.log('Mongo db connected');
  // await uploadQuotes();
  // await getQuote();
});

