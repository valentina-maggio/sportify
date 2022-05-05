const express = require("express");
const WorkoutsController = require("../controllers/workout");

const workoutsRouter = express.Router();

workoutsRouter.post("/workouts", WorkoutsController.Create);

module.exports = workoutsRouter;
