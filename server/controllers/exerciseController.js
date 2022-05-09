const Exercise = require('../models/exerciseModel');

const createExercise = async (req, res) => {
  const mongooseObject = {
    name: req.body.name,
    category: req.body.category,
    duration: req.body.duration,
    intensity: req.body.intensity,
    link: req.body.link,    
  };

  console.log(`req body name ${req.body.name}`)

  const exercise = new Exercise(mongooseObject);

  try {    
    console.log(`Saving workout ${exercise}`)
    await exercise.save();
    console.log(`Saving workout ${exercise}`)
    res.status(201);
  } catch (error) {
    console.log(error)
    res.send(`Exercise could not be saved! Try again. ${error.message}`);
  }
};

const getExercises = async (req, res) => {

  const exercisesFromMongo = await Exercise.find();
  console.log(`this is mongoose shit ${exercisesFromMongo}`);

  const exercisesArray = [];

  exercisesFromMongo.forEach((element) => {
    exercisesArray.push({name: element.name, duration: element.duration});
  });

  console.log(exercisesArray);

  res.send(exercisesArray);
};

module.exports = {
  createExercise,
  getExercises,
};
