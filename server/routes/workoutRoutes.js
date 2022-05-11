const express = require('express');

const workoutRouter = express.Router();

const {
  scheduleWorkouts,
  upcomingWorkouts,
  historyWorkouts,
  deleteWorkouts,
} = require('../controllers/workoutController');

workoutRouter.post('/', scheduleWorkouts);
workoutRouter.get('/', upcomingWorkouts);
workoutRouter.get('/history', historyWorkouts);

workoutRouter.post('/delete', deleteWorkouts);

module.exports = workoutRouter;
