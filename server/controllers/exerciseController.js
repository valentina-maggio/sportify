const Exercise = require('../models/exerciseModel');

const createExercise = async (req, res) => {
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
    res.status(201);
  } catch (error) {
    res.send(`Exercise could not be saved! Try again. ${error.message}`);
  }
};

const getExercises = async (req, res) => {
  const exercises = Exercise.find();
  res.send(exercises);
};

module.exports = {
  createExercise,
  getExercises,
};

// const ExerciseController = {
//   Create: (req, res) => {
//     const mongooseObject = {
//       name: req.body.name,
//       category: req.body.category,
//       duration: req.body.duration,
//       intensity: req.body.intensity,
//       link: req.body.link,
//     };
    
    // const exercise = new Exercise(mongooseObject);

    // try {
    //   await exercise.save();
    //   res.status(201);
    // } catch (error) {
    //   res.send(`Exercise could not be saved! Try again. ${error.message}`);
    // }

    // if (req.body.name) {
    //   exercise.save((err) => {
    //     if (err) {
    //       throw err;
    //     }
    //     // where am i redirecting to? not really familiar with how the website works
    //     res.status(201).redirect("/workout");
    //   });
    // } else {
    //   res.status(201).redirect("/workout");
    //}
//   // },
// }

// module.exports = ExerciseController;