const dotenv = require('dotenv');
const mongoose = require('mongoose');
const Exercise = require('./exerciseModel');

dotenv.config();

mongoose.connect(process.env.ATLAS_URI, {
  useNewUrlParser: true,
});

// const db = mongoose.connection;

// console.log(db.name);

const exercises = [
  {
    _id: '62596c9539f4ca6d024cee07',
    name: 'Stroll',
    category: 'Walking',
    duration: 1800,
    intensity: 'Low Impact',
  },
  {
    _id: '62596cc70b90a16ceeaf66f1',
    name: 'Beginner Yoga',
    category: 'Yoga',
    duration: 1200,
    intensity: 'Low Impact',
    link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  },
  {
    _id: '62596cd10b90a16ceeaf66fa',
    name: 'HIIT',
    category: 'HIIT',
    duration: 1200,
    intensity: 'High Impact',
    link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  },
  {
    _id: '625979737890bb083ccb43bf',
    name: 'Weights',
    category: 'Strength Training',
    duration: 2100,
    intensity: 'Medium Impact',
    link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  },
  {
    _id: '6259797f7890bb083ccb43c8',
    name: '10k Run',
    category: 'Cardio',
    duration: 3600,
    intensity: 'Medium Impact',
    link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  },
  {
    _id: '62597a290f8ad516167bcd4d',
    name: '5k Run',
    category: 'Cardio',
    duration: 1800,
    intensity: 'Medium Impact',
    link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  },
  {
    _id: '625acd9cc936214661cf5692',
    name: 'Bike Ride',
    category: 'Cardio',
    duration: 2700,
    intensity: 'Medium Impact',
    link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
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
