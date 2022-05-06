const Exercise = require("../models/exercise");

const ExerciseController = {
  Create: async (req, res) => {
    const mongooseObject = {
      name: req.body.name,
      category: req.body.category,
      duration: req.body.duration,
      intensity: req.body.intensity,
      link: req.body.link,
    };
    const exercise = new Exercise(mongooseObject);

    try {
      await exercise.save();
      res.status(201).redirect("/");
    } catch (error) {
      res.redirect("/calendar");
      res.send(`Exercise could not be saved! Try again. ${error.message}`);
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
