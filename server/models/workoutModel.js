const mongoose = require('mongoose');

//Schema

const workoutSchema = new mongoose.Schema({
  workoutScheduledDate: {
    type: Date,
    default: Date.now,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User',
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  workoutName: {
    type: String,
    required: true,
  }

});

const Workout = mongoose.model('Workout', workoutSchema);

module.exports = Workout;