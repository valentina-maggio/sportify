const User = require("../models/user");
const bcrypt = require("bcrypt");

const UsersController = {
  Create: async (req, res) => {
    const user = new User(req.body);
    //added bycrypt into password parsing
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);

    const userExists = await User.exists({email: user.email})

    if (userExists == false) {
      user.save((err) => {
        if (err) {
          throw err;
        }
    res.redirect('/:username')
      });
    }
  },

  userProfile: async (req, res) => {

    const username = req.params.username;
    User.findOne({username: username}, (err, data) => {
      if (err) {
        const error = {
          status: `The user "${username}" has not been found`,
        }
        res.render("error", { error: error });
        res.redirect(`/user`);
      } else {
        res.status(201).json(data);
      }
    })
    
  }

}

module.exports = UsersController;