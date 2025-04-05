const express = require("express");
const app = express();
require("dotenv").config();
const { connectDB } = require("./dataBase/connectDB");
const userRouter = require("./routes/userRouter");
app.use(express.json());
app.use("/users", userRouter);

connectDB();
app.listen(process.env.PORT, (err) =>
  err
    ? console.log(err)
    : console.log(
        `server is connecting on http://localhost:${process.env.PORT}`
      )
);
