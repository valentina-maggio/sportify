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
  console.log('get exercises was called');
  // const exercises = Exercise.find();
  const exercises = JSON.stringify([{name: "Full Body", duration: "20"},
  {name: "Yoga", duration: "40"},
  {name: "Pilates", duration: "30"}])
  console.log(exercises)
  res.send(exercises);
  // res.redirect('/exercises')
};

module.exports = {
  createExercise,
  getExercises,
};
