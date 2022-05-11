const express = require('express');

const workoutRouter = express.Router();

const {
  scheduleWorkouts,
  upcomingWorkouts,
} = require('../controllers/workoutController');

workoutRouter.post('/', scheduleWorkouts);
workoutRouter.get('/', upcomingWorkouts);

module.exports = workoutRouter;
