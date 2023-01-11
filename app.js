const bodyParser = require("body-parser");
const express = require("express");
const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const blogRoutes = require('./routes/blog')
const db = require("./model");
db.sequelize.sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });
app.use('/blog', blogRoutes)
module.exports = app;
