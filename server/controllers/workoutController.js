const Workout = require('../models/workoutModel');
const User = require('../models/userModel');

const scheduleWorkouts = async (req, res) => {
  const userId = await User.findOne({ email: req.body.username });

  const mongooseObject = {
    date: new Date(req.body.date),
    user: userId.id,
    duration: parseInt(req.body.duration, 10),
    name: req.body.name,
    category: req.body.category,
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
  const userParam = req.query.user;

  const userId = await User.findOne({ email: userParam });

  const userWorkouts = await Workout.find({ user: userId._id }).sort({ date: 1 });

  // const workouts = await Workout.find();

  const currentDate = new Date();
  const results = userWorkouts.filter((workout) => workout.date > currentDate);
  res.send(results);
};

const historyWorkouts = async (req, res) => {
  const userParam = req.query.user;

  const userId = await User.findOne({ email: userParam });

  // const userWorkouts = await Workout.find({ user: userId._id });

  const workouts = await Workout.find({ user: userId.id });
  const currentDate = new Date();
  const history = workouts.filter((workout) => workout.date < currentDate);

  console.log('history data');
  console.log(history);

  let data = [];
  let cat = history.map((w) => w.category);
  let dur = history.map((w) => w.duration);
  const colors = [
    '#8884d8',
    '#9cacf1',
    '#8dd1e1',
    '#82ca9d',
    '#a4de6c',
    '#d0ed57',
    '#8884d8',
    '#9cacf1',
    '#8dd1e1',
    '#82ca9d',
    '#a4de6c',
    '#d0ed57',
  ];
  for (let i = 0; i < cat.length; i++) {
    data.push({ name: cat[i], value: dur[i], fill: colors[i] });
  }
  let data01 = [];
  data.reduce(function (result, value) {
    if (!result[value.name]) {
      result[value.name] = {
        name: value.name,
        value: value.value,
        fill: value.fill,
      };
      data01.push(result[value.name]);
    }
    result[value.name].value += value.value;
    return result;
  }, {});

  console.log(data01);
  res.send(data01);
};

const deleteWorkouts = async (req, res) => {
  console.log(req.params.id);

  const one = await Workout.findOne({ _id: req.params.id });

  console.log(one);

  await Workout.findOneAndDelete({ _id: req.params.id });
  res.status(200).send('hello');
};

module.exports = {
  scheduleWorkouts,
  upcomingWorkouts,
  historyWorkouts,
  deleteWorkouts,
};
