const mongoose = require("mongoose");
require("dotenv").config();
const db = process.env.MONGO;

mongoose
  .connect(db)
  .then(() => {
    console.log("Connected to data base");
  })
  .catch((err) => {
    console.log(err);
  });
