const mongoose = require('mongoose');

//Schema

const usersSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }, 
});

const User = mongoose.model('User', usersSchema);

module.exports = User;
