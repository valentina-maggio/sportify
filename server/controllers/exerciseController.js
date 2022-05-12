const Exercise = require('../models/exerciseModel');
const User = require('../models/userModel')

const createExercise = async (req, res) => {

  console.log(req.body);
  
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
    await exercise.save();
    res.status(200).send('New exercise saved');
  } catch (error) {
    console.log(error);
    res.send(`Exercise could not be saved! Try again. ${error.message}`);
  }
};

const getExercises = async (req, res) => {

  const userParam = req.query.user;

  const userId = await User.findOne({email: userParam});

  const defaultExercises = await Exercise.find({user: null});

  const exercisesSavedByLoggedInUser = await Exercise.find({user: userId.id});

  const exercisesArray = [];

  defaultExercises.forEach((element) => {
    exercisesArray.push({ name: element.name, category: element.category });
  });

  exercisesSavedByLoggedInUser.forEach((element) => {
    exercisesArray.push({ name: element.name, category: element.category  });
  });

  console.log(exercisesArray);
  res.send(exercisesArray);
};

module.exports = {
  createExercise,
  getExercises,
};
