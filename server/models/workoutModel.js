const mongoose = require('mongoose');

//Schema

const workoutSchema = new mongoose.Schema({
  dateOfActivity: {
    type: Date,
    default: Date.now,
  },
    // exercise: {
    //   type: mongoose.Schema.Types.ObjectId, 
    //   ref: 'Exercise',
    //   required: true,
    // },
  exercise: {
    type: String,
    required: true,
  },
  timeCompleted: {
    type: Date,
    default: Date.now,
  },
    

});

const Workout = mongoose.model('Workout', workoutSchema);

module.exports = Workout;