const mongoose = require('mongoose');
const Exercise = require('./exerciseModel');
const dotenv = require('dotenv');
dotenv.config();

// add ATLAS_URI to connect to the database

mongoose.connect(process.env.ATLAS_URI, {
  useNewUrlParser: true,
});

const exercises = [
  {
    name: 'Walking',
    category: 'Cardio',
    intensity: 'Low',
  },
  {
    name: 'Yoga',
    category: 'Stretching',
    intensity: 'Low',
  },
  {
    name: 'Upper Body',
    category: 'Strength',
    intensity: 'Medium',
  },
  {
    name: 'Core',
    category: 'Strength',
    intensity: 'Low',
  },
  {
    name: 'Lower Body',
    category: 'Strength',
    intensity: 'Medium',
  },
  {
    name: 'Cycling',
    category: 'Cardio',
    intensity: 'High',
  },
  {
    name: 'Running',
    category: 'Cardio',
    intensity: 'High',
  },
  {
    name: 'High Intensity Interval Training',
    category: 'Interval',
    intensity: 'High',
  },
];

exercises.forEach((exercise) => {
  try {
    Exercise.create({
      name: exercise.name,
      category: exercise.category,
      intensity: exercise.intensity,
    });
  } catch (e) {
    console.log('Caught Error:', e);
  }
});
