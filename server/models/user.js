
const mongoose = require('mongoose');

//Schema

const UsersSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    sex: {
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

module.exports = mongoose.model('User', UsersSchema);
