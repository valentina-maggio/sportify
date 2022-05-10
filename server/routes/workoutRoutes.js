const express = require('express');

const workoutRouter = express.Router();

const {
  scheduleWorkouts
} = require('../controllers/workoutController');

workoutRouter.post('/', scheduleWorkouts);

module.exports = workoutRouter;