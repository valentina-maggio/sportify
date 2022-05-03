const {
    getAllUsers,
    createUser,
} = require('../models/user.model');

async function httpGetAllUsers(req, res) {
    return res.status(200).json(await getAllUsers());
}

async function httpCreateUser(req, res) {
    return 
}

module.exports = {
    httpGetAllUsers,
    httpCreateUser,
};