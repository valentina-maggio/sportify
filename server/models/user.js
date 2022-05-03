
const mongoose = require('mongoose');

//Schema

const usersSchema = new mongoose.Schema({
    userName: {
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
    registerDate: {
        type: Date,
        required: true,
    },
    {
        timestamps: true,
    }
    

});


module.exports = mongoose.model('User', usersSchema);
