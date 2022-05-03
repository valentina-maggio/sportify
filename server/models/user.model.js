const users = require('./user.mongo')

// Create a new user
function createUser() {

}


// Showing all the users from the mongo database
async function getAllUsers() {
    return await users.find({})
}

module.exports = {
    getAllUsers,
    createUser,
}
