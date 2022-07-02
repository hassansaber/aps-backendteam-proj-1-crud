const mongoose = require("mongoose");

const connectDB = async (uri) => {
  try {
    await mongoose.connect(uri);
    console.log("connected to DB successfully");
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = connectDB;
