const mongoose = require("mongoose");
const Exercise = require("./exercise");
const dotenv = require("dotenv");
dotenv.config();

const MONGO_URL = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.mgq9v.mongodb.net/Sportify?retryWrites=true&w=majority`;

mongoose.connect(MONGO_URL);

const db = mongoose.connection;

console.log(db.name);

const exercises = [
  {
    name: "Stroll",
    category: "Walking",
    duration: 1800,
    intensity: "Low Impact",
  },
  {
    name: "Beginner Yoga",
    category: "Yoga",
    duration: 1200,
    intensity: "Low Impact",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    name: "HIIT",
    category: "HIIT",
    duration: 1200,
    intensity: "High Impact",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    name: "Weights",
    category: "Strength Training",
    duration: 2100,
    intensity: "Medium Impact",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    name: "10k Run",
    category: "Cardio",
    duration: 3600,
    intensity: "Medium Impact",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    name: "5k Run",
    category: "Cardio",
    duration: 1800,
    intensity: "Medium Impact",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    name: "Bike Ride",
    category: "Cardio",
    duration: 2700,
    intensity: "Medium Impact",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
];

exercises.forEach((exercise) => {
  try {
    Exercise.create({
      name: exercise.name,
      category: exercise.category,
      duration: exercise.duration,
      intensity: exercise.intensity,
      url: exercise.url,
    });
  } catch (e) {
    console.log("Caught Error:", e);
  }
});
