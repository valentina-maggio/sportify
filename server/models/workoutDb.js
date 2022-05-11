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
    workoutScheduledDate: new Date(2022, 01, 20, 40, 23, 59),
    user: '62793903e1c164d22a98409d',
    duration: 10,
    workoutName: 'Light stretch',
    category: 'Low Impact',
  },
  {
    workoutScheduledDate: new Date(2022, 02, 20, 40, 23, 59),
    user: '62793903e1c164d22a98409d',
    duration: 45,
    workoutName: 'Summer circuits',
    category: 'HIIT',
  },
  {
    workoutScheduledDate: new Date(2022, 03, 20, 40, 23, 59),
    user: '62793903e1c164d22a98409d',
    duration: 60,
    workoutName: '10km run',
    category: 'Cardio',
  },
  {
    workoutScheduledDate: new Date(2022, 04, 20, 40, 23, 59),
    user: '62793903e1c164d22a98409d',
    duration: 30,
    workoutName: 'Yoga',
    category: 'Low Impact',
  },
  {
    workoutScheduledDate: new Date(2022, 05, 20, 40, 23, 59),
    user: '62793903e1c164d22a98409d',
    duration: 30,
    workoutName: 'Pilates',
    category: 'Low Impact',
  },
  {
    workoutScheduledDate: new Date(2022, 06, 20, 40, 23, 59),
    user: '62793903e1c164d22a98409d',
    duration: 30,
    workoutName: 'Calisthenics',
    category: 'Medium Impact',
  },
  {
    workoutScheduledDate: new Date(2022, 07, 20, 40, 23, 59),
    user: '62793903e1c164d22a98409d',
    duration: 45,
    workoutName: 'Time trial cycling',
    category: 'Cardio',
  },
];

workouts.forEach((workout) => {
  try {
    Workout.create({
      workoutScheduledDate: workout.workoutScheduledDate,
      user: workout.user,
      duration: workout.duration,
      workoutName: workout.workoutName,
      category: workout.category,
    });
  } catch (e) {
    console.log('Caught Error:', e);
  }
});
