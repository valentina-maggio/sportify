const Workout = require('../models/workoutModel');
const User = require('../models/userModel')

const scheduleWorkouts = async (req, res) => {

  const userId = await User.findOne({email: req.body.username});

  const mongooseObject = {
    workoutScheduledDate: req.body.workoutDate,
    user: userId.id,
    duration: parseInt(req.body.duration),
    workoutName: req.body.exerciseName,
  };
  
  const workout = new Workout(mongooseObject);

  try {
    await workout.save();
    res.status(201);
  } catch (error) {
    console.log(error);
    res.send(`Workout could not be scheduled! Try again. ${error.message}`);
  }
};


module.exports = {
  scheduleWorkouts
};
