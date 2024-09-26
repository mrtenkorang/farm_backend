const e = require("express");
const mongoose = require("mongoose");

function connectToDB() {
  mongoose
    .connect(
      "mongodb+srv://mrtenkorang:kwamejot17!A@afarinickdbcluster.2x6t1.mongodb.net/afarinick?retryWrites=true&w=majority&appName=AfarinickDBCluster"
    )
    .then(() => {
      console.log("connected to mongodb");
    })
    .catch((err) => {
      console.log("Failed to connect to mongodb", err);
    });
}

module.exports = {connectToDB}
