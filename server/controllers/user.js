const User = require("../models/user");

const UsersController = {
  Create: async (req, res) => {
    const user = new User(req.body);

    const userExists = await User.exists({email: user.email})

    if (userExists == false) {
      user.save((err) => {
        if (err) {
          throw err;
        }
      });
    }
  }
}

module.exports = UsersController;