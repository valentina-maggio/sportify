const express = require('express');

const UsersController = require('../controllers/user');

const usersRouter = express.Router();

usersRouter.get('/:username', UsersController.userProfile)
usersRouter.post('/', UsersController.Create); //link to signup page
usersRouter.post('/login', UsersController.login); //link to login page



module.exports = usersRouter;

