const express = require("express");
const ExerciseController = require("../controllers/exercise");

const exerciseRouter = express.Router();

exerciseRouter.post("/", ExerciseController.Create);

module.exports = exerciseRouter;
