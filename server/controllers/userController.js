const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const e = require("express");

const UsersController = {
  
  
  Create: async (req, res) => {
    // const users = new User(req.body);
    // console.log(user)
    // users.save()
    //     .then(i => res.send('user saved to database'))
    //     .catch(err => res.status(400).send('unable to save use to database'));

    
    // //added bycrypt into password parsing
    // const salt = await bcrypt.genSalt(10);
    // user.password = await bcrypt.hash(user.password, salt);

    // const userExists = await User.exists({email: user.email});
    // console.log(`userExists or not${userExists}`);

    // //check if user exits
    // if (!userExists) {
      
    // };

    // let user = await User.findOne({email: req.body.email});
    // console.log(`userExists or not${user}`);
    

    // user = new User({
      
    // });
    // console.log(user)
    // user.save({
    //   username: req.body.username,
    //   email: req.body.email,
    //   password: req.body.password
    // })

    //checking user exists or not
    let user = await User.findOne({email: req.body.email});
    
    if (!user) {
      const user = new User(req.body)

      // generate salt to hash password
      const salt = await bcrypt.genSalt(10);
      // set user passwork to hased password
      user.password = await bcrypt.hash(user.password, salt);

      return user.save({
          username: user.username,
          email: user.email,
          password: user.password
        })
        .then(i => res.status(200).json(user.username))
        .catch(err => res.status(400).send('unable to save use to database'));
    } else {
      res.status(400).end('user already exists') 
    }

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
    

  },

  login: async (req, res) => {
    const body = req.body;
    const user = await User.findOne({email:body.email});
    if(user) {
      //check user password with hashed password stored in the database
      const validPassword = await bcrypt.compare(body.password, user.password);
      console.log(validPassword)
      if (validPassword) {
        res.status(200).json({ message: 'Valid password'});
        console.log('User logged in successfully')
      } else {
        res.status(400).json({ error: "Invalid Password" });
      }
    } else {
      res.status(400).json({ error: "User does not exit"});
    }
  }

}

module.exports = UsersController;