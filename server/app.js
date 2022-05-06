const express = require("express");
const cors = require("cors");

const usersRouter = require("./routes/user");
const exerciseRouter = require("./routes/exercise");

const app = express();

app.use(
  cors({
    origin: "http://localhost:3001",
  }),
);

app.use(express.json());

//routes goes here
app.use("/users", usersRouter);
app.use("/exercises", exerciseRouter);

module.exports = app;
