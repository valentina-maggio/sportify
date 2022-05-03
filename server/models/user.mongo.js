const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
    name: {
        type: Number,
        required: true,
    },
    age: {
        type: String,
        required: true,
    },
    registerDate: {
        type: Date,
        required: true,
    },
    

});

// connects usersSchema with the user collection
module.exports = mongoose.model('User', usersSchema);