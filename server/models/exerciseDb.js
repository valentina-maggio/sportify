const mongoose = require('mongoose');
const Exercise = require('./exerciseModel');
const dotenv = require('dotenv');
dotenv.config();

// add ATLAS_URI to connect to the database

mongoose.connect(ATLAS_URI, {
  useNewUrlParser: true,
});

// const db = mongoose.connection;

// console.log(db.name);

const exercises = [
  {
    name: 'Stroll',
    category: 'Walking',
    intensity: 'Low Impact',
  },
  {
    name: 'Beginner Yoga',
    category: 'Yoga',
    intensity: 'Low Impact',
  },
  {
    name: 'Upper Body',
    category: 'HIIT',
    intensity: 'High Impact',
  },
  {
    name: 'Lower Body',
    category: 'Strength Training',
    intensity: 'Medium Impact',
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
