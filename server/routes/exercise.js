const express = require("express");
const ExerciseController = require("../controllers/exercise");

const exerciseRouter = express.Router();

exerciseRouter.post("/exercises", ExerciseController.Create);

module.exports = exerciseRouter;
