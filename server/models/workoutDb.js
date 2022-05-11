const dotenv = require('dotenv');
const mongoose = require('mongoose');
const Workout = require('./workoutModel');

dotenv.config();

mongoose.connect(process.env.ATLAS_URI, {
  useNewUrlParser: true,
});

// eslint-disable-next-line
const db = mongoose.connection;

const workouts = [
  {
    date: '2022-06-01T18:00:00',
    user: '62796b282c551c0a9effa8f1',
    duration: 10,
    name: 'Light stretch',
    category: 'Low Impact',
  },
  {
    date: '2022-06-01T20:00:00',
    user: '62796b282c551c0a9effa8f1',
    duration: 45,
    name: 'Summer circuits',
    category: 'HIIT',
  },
  {
    date: '2022-06-01T23:00:00',
    user: '62796b282c551c0a9effa8f1',
    duration: 60,
    name: '10km run',
    category: 'Cardio',
  },
  {
    date: '2022-05-01T18:00:00',
    user: '62796b282c551c0a9effa8f1',
    duration: 30,
    name: 'Yoga',
    category: 'Low Impact',
  },
  {
    date: '2022-04-01T18:00:00',
    user: '62796b282c551c0a9effa8f1',
    duration: 30,
    name: 'Pilates',
    category: 'Low Impact',
  },
  {
    date: '2022-03-01T18:00:00',
    user: '62796b282c551c0a9effa8f1',
    duration: 30,
    name: 'Calisthenics',
    category: 'Medium Impact',
  },
  {
    date: '2022-02-01T18:00:00',
    user: '62796b282c551c0a9effa8f1',
    duration: 45,
    name: 'Time trial cycling',
    category: 'Cardio',
  },
];

workouts.forEach((workout) => {
  try {
    Workout.create({
      workoutScheduledDate: workout.date,
      user: workout.user,
      duration: workout.duration,
      workoutName: workout.name,
      category: workout.category,
    });
  } catch (e) {
    console.log('Caught Error:', e);
  }
});
