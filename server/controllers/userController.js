const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const e = require("express");

const UsersController = {
  Create: async (req, res) => {
    let user = await User.findOne({ email: req.body.email });
    if (user) return res.status(400).send("User already exists.");

    user = new User({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
    await user.save();

    res.status(200).send({
      username: req.body.username,
      email: req.body.email,
    });
  },

  userProfile: async (req, res) => {
    const username = req.params.username;
    User.findOne({ username: username }, (err, data) => {
      if (err) {
        const error = {
          status: `The user "${username}" has not been found`,
        };
        res.status(400).json({ error: error });
      } else {
        res.status(201).json(data);
      }
    });
  },

  Login: async (req, res) => {
    const body = req.body;
    const user = await User.findOne({ email: body.email });
    if (!user) console.log("User does not exist.");


    const validPassword = await bcrypt.compare(body.password, user.password);
    if (!validPassword) res.status(400).send("invalid email or password");
    res.status(200).send("welcome!");
  },
};

module.exports = UsersController;
