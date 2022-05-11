const express = require('express');

const workoutRouter = express.Router();

const {
  scheduleWorkouts,
  upcomingWorkouts,
  historyWorkouts,
} = require('../controllers/workoutController');

workoutRouter.post('/', scheduleWorkouts);
workoutRouter.get('/', upcomingWorkouts);
workoutRouter.get('/history', historyWorkouts);


module.exports = workoutRouter;
