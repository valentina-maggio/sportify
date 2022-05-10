const mongoose = require('mongoose');

const exerciseSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User',
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  intensity: {
    type: String,
    required: true,
  },
  link: {
    type: String,
  },
});

module.exports = mongoose.model('Exercise', exerciseSchema);
