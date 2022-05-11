const mongoose = require('mongoose');
const User = require('./user');
const dotenv = require('dotenv');
dotenv.config();

const MONGO_URL = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.mgq9v.mongodb.net/Sportify?retryWrites=true&w=majority`;

mongoose.connect(MONGO_URL);

const db = mongoose.connection;

console.log(db.name);

const users = [
  {
    // _id: "62596c9539f4ca6d024cee07",
    username: 'Lobster',
    email: 'Lobster@gmail.com',
    password: '12341234',
  },
  {
    // _id: "62596cc70b90a16ceeaf66f1",
    username: 'Ben',
    email: 'ben@gamil.com',
    password: '56678',
  },
  {
    username: 'Jerry',
    email: 'jerry@gmail.com',
    password: '1234',
  },
];

users.forEach((user) => {
  try {
    User.create({
      // _id: user._id,
      username: user.username,
      email: user.email,
      password: user.password,
    });
  } catch (e) {
    console.log('Caught Error:', e);
  }
});
