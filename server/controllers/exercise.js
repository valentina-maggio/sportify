const Exercise = require("../models/exercise");

const ExerciseController = {
  Create: (req, res) => {
    const mongooseObject = {
      name: req.body.name,
      category: req.body.category,
      type: req.body.type,
      duration: req.body.duration,
      link: req.body.link,
    };
    const exercise = new Exercise(mongooseObject);

    try {
      exercise.save();
      res.status(201).redirect("/exercises");
    } catch (error) {
      res.redirect("/");
      console.log(`Exercise could not be saved! Try again. ${error.message}`);
    }
    // if (req.body.name) {
    //   exercise.save((err) => {
    //     if (err) {
    //       throw err;
    //     }
    //     // where am i redirecting to? not really familiar with how the website works
    //     res.status(201).redirect("/");
    //   });
    // } else {
    //   res.status(201).redirect("/exercises");
    // }
  },
};

module.exports = ExerciseController;
