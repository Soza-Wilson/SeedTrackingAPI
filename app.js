const express = require("express");
const bodyParser = require("body-parser");

const requestsRoutes = require("./routes/requests");
const db = require("./util/database");
const app = express();

// db.execute("CREATE DATABASE IF NOT EXISTS seed_tracking_api")
//   .then((result) => console.log(result))
//   .catch((error) => {
//     console.log(error);
//   });
  
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST");
  res.setHeader("Access-Control-Allow-Methods", "Content-Type,Authorization");

  next();
});



app.use("/requests", requestsRoutes);

app.listen(8080);
