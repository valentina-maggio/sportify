const Workout = require('../models/workoutModel');
const User = require('../models/userModel');

const scheduleWorkouts = async (req, res) => {
  const userId = await User.findOne({ email: req.body.username });

  const mongooseObject = {
    workoutScheduledDate: req.body.workoutDate,
    user: userId.id,
    duration: parseInt(req.body.duration, 10),
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

const upcomingWorkouts = async (req, res) => {
  const workouts = await Workout.find();

  res.send(workouts);
};
const historyWorkouts = async (req, res) => {
  const history = await Workout.find();
  let data = []
  let cat = history.map((w) => w.category);
  let dur = history.map((w) => w.duration);
  const colors = ['#8884d8', '#9cacf1', '#8dd1e1', '#82ca9d', '#a4de6c', '#d0ed57', '#8884d8', '#9cacf1', '#8dd1e1', '#82ca9d', '#a4de6c', '#d0ed57'];
  for (let i = 0; i < cat.length; i++) {
    data.push({name: cat[i], value: dur[i], fill: colors[i]});
  }
  console.log(data)
  res.send(data);
};
module.exports = {
  scheduleWorkouts,
  upcomingWorkouts,
  historyWorkouts,
};
