const Exercise = require('../models/exerciseModel');
const User = require('../models/userModel')

const createExercise = async (req, res) => {

  const userId = await User.findOne({email: req.body.user});

  const mongooseObject = {
    user: userId.id,
    name: req.body.name,
    category: req.body.category,
    intensity: req.body.intensity,
    link: req.body.link,
  };

  const exercise = new Exercise(mongooseObject);

  try {
    console.log('I am before save');
    await exercise.save();
    console.log('I am after save');
    res.status(201);
  } catch (error) {
    console.log(error);
    res.send(`Exercise could not be saved! Try again. ${error.message}`);
  }
};

const getExercises = async (req, res) => {

  const userParam = req.query.user;

  console.log(userParam);

  const userId = await User.findOne({email: userParam});

  console.log(userId.id);

  const exercisesFromMongo = await Exercise.find({user: userId.id});

  console.log(exercisesFromMongo);

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
