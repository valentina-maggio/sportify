const Exercise = require("../models/exercise");

const ExerciseController = {
  Create: (req, res) => {
    const mongooseObject = {
      name: req.body.name,
      category: req.body.category,
      duration: req.body.duration,
      url: req.body.url,
    };
    const exercise = new Exercise(mongooseObject);

    if (req.body.name) {
      exercise.save((err) => {
        if (err) {
          throw err;
        }
        // where am i redirecting to? not really familiar with how the website works
        res.status(201).redirect("/");
      });
    } else {
      res.status(201).redirect("/");
    }
  },
};
