const Exercise = require('../models/exerciseModel');

const createExercise = async (req, res) => {
  const mongooseObject = {
    name: req.body.name,
    category: req.body.category,
    intensity: req.body.intensity,
    link: req.body.link,
  };

  const exercise = new Exercise(mongooseObject);

  try {
    await exercise.save();
    res.status(201);
  } catch (error) {
    console.log(error);
    res.send(`Exercise could not be saved! Try again. ${error.message}`);
  }
};

const getExercises = async (req, res) => {
  const exercisesFromMongo = await Exercise.find();

  const exercisesArray = [];

  exercisesFromMongo.forEach((element) => {
    exercisesArray.push({ name: element.name });
  });

  res.send(exercisesArray);
};

module.exports = {
  createExercise,
  getExercises,
};
