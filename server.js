const express = require("express");
const app = express();
const connectDB = require("./db/connect");
require("dotenv").config();
//-
const userRouter = require("./routes/user.router");
const middlewareRequest = require("./middlewares/request.middleware");
app.use(middlewareRequest);
//---

app.use("/api/v1/user", userRouter);

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
