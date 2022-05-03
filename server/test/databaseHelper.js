const mongoose = require('mongoose');
const dotenv = require("dotenv")
dotenv.config()

const MONGO_TEST_URL = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.mgq9v.mongodb.net/Sportify-test?retryWrites=true&w=majority`

beforeAll(function(done) {
    mongoose.connect(MONGO_TEST_URL);
  
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'MongoDB connection error:'));
    db.on('open', function() {
      done();
    });
  });
  
afterAll(function(done) {
    mongoose.connection.close(true, function() {
      done();
    });
  });
