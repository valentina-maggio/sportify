const express = require('express');
const exerciseRouter = express.Router();

const {
  createExercise
} = require('../controllers/exerciseController')