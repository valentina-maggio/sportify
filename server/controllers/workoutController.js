const Workout = require('../models/workoutModel');

const scheduleWorkouts = async (req, res) => {
  const mongooseObject = {
    workoutScheduledDate: req.body.workoutDate,
    user: req.body.username,
    duration: req.body.duration,
    workoutName: req.body.exerciseName,
  };

  console.log(`req body name ${req.body}`);

  // const exercise = new Exercise(mongooseObject);

  // try {
  //   console.log(`Saving workout ${exercise}`);
  //   await exercise.save();
  //   console.log(`Saving workout ${exercise}`);
  //   res.status(201);
  // } catch (error) {
  //   console.log(error);
  //   res.send(`Exercise could not be saved! Try again. ${error.message}`);
  // }
};


module.exports = {
  scheduleWorkouts
};
