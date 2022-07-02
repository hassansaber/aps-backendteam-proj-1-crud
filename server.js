const express = require("express");
const app = express();
const connectDB = require("./db/connect");
require("dotenv").config();

//---

app.get("/login", (req, res) => {
  res.send("login page");
});

app.get("/", (req, res) => {
  res.send("hello world");
});

//---
const PORT = 8000;
// console.log(process.env.MONGO_URI);
const server = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, () => {
      console.log(`server is running on port ${PORT}`);
    });
  } catch (err) {
    console.log(err.message);
  }
};

server();
