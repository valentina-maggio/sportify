const express = require('express');

const exerciseRouter = express.Router();

const {
  createExercise,
  getExercises,
} = require('../controllers/exerciseController');

exerciseRouter.get('/', getExercises);
exerciseRouter.post('/', createExercise);

module.exports = exerciseRouter;
