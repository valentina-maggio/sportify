const express = require('express');

const UsersController = require('../controllers/userController');

const usersRouter = express.Router();

usersRouter.get('/:username', UsersController.userProfile);
usersRouter.post('/register', UsersController.Create); //link to signup page
usersRouter.post('/login', UsersController.Login); //link to login page

module.exports = usersRouter;
