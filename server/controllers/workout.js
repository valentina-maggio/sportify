const Workout = require('../models/workout');
const mongoose = require("mongoose");
const dotenv = require("dotenv")
dotenv.config()

const MONGO_URL = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.mgq9v.mongodb.net/Sportify?retryWrites=true&w=majority`

mongoose.connect(MONGO_URL, {
    useNewUrlParser: true,
  });

const workouts = [
  {
    exercise: "62596c9539f4ca6d024cee09"
  }
]

workouts.forEach((workout) => {
  try {
    Workout.create({
    exercise: workout.exercise
    });
  } catch (e) {
    console.log("Caught Error:", e);
  }
});