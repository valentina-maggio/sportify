const users = require('./user.mongo')

// Create a new user
function createUser() {

}


// Showing all the users from the mongo database
async function getAllUsers() {
    return await users.find({})
}

//Delet a user by its ID

//Update user infor by its ID



module.exports = {
    getAllUsers,
    createUser,
}
