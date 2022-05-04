require("../databaseHelper");
const Workout = require("../../models/workout");

describe("Workout model", () => {
  beforeEach((done) => {
    mongoose.connection.collections.users.drop(() => {
      done();
    });
  });

  describe("Creating a new user", () => {
     
  })


});