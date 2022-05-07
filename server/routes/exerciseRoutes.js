const express = require('express');
const exerciseRouter = express.Router();

const {
  createExercise
} = require('../controllers/exerciseController');

exerciseRouter.post('/', createExercise);

module.exports = exerciseRouter;
