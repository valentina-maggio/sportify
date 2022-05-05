const User = require("../models/user");
const bcrypt = require("bcrypt");

const UsersController = {
  
  
  Create: async (req, res) => {
    const user = new User(req.body);
    console.log(user)

    
    // //added bycrypt into password parsing
    // const salt = await bcrypt.genSalt(10);
    // user.password = await bcrypt.hash(user.password, salt);

    const userExists = await User.exists({email: user.email}, function (err, doc) {
      if (err){
          console.log(err)
      }else{
          console.log("Result :", doc) // true
      }
    });
    console.log(`userExists or not${userExists}`);

    //check if user exits
    if (!userExists) {
      user.save()
        .then(i => res.send('user saved to database'))
        .catch(err => res.status(400).send('unable to save use to database'));
    };
  },

  userProfile: async (req, res) => {

    const username = req.params.username;
    User.findOne({username: username}, (err, data) => {
      if (err) {
        const error = {
          status: `The user "${username}" has not been found`,
        }
        res.status(400).json({ error: error });
      } else {
        res.status(201).json(data);
      }
    })
    
  }

}

module.exports = UsersController;