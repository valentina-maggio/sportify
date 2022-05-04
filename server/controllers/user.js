const Users = require("../models/user");
const bcrypt = require("bcrypt");

const UsersController = {
  Create: async (req, res) => {
    const user = new Users(req.body);
    //added bycrypt into password parsing
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);

    const userExists = await Users.exists({email: user.email})

    if (userExists == false) {
      user.save((err) => {
        if (err) {
          throw err;
        }
      });
    }
  },

  getOneUser: async (req, res) => {
    return res.status(200).json(`hello world`)
  }

}


module.exports = UsersController;