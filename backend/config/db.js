const mongoose = require("mongoose");

const connecdb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("you did it ur connected to ur db");
  } catch (err) {
    console.log(err);
  }
};

module.exports = connecdb;
