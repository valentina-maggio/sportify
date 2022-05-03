const express = require('express');

const { 
    httpGetAllUsers,
    httpCreateUser,
 } = require('../controllers/user.controller');

const usersRouter = express.Router();

usersRouter.get('/', httpGetAllUsers);
usersRouter.post('/', httpCreateUser);

module.exports = usersRouter;

