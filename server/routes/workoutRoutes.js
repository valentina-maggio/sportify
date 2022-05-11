const express = require('express');

const workoutRouter = express.Router();

const {
  scheduleWorkouts,
  upcomingWorkouts,
  deleteWorkouts,
} = require('../controllers/workoutController');

workoutRouter.post('/', scheduleWorkouts);
workoutRouter.get('/', upcomingWorkouts);
workoutRouter.post('/delete', deleteWorkouts);

module.exports = workoutRouter;
