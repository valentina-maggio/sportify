const express = require('express');

const UserController = require('../controllers/user');

const userRouter = express.Router();

userRouter.get('/', UserController.getOneUser)
userRouter.post('/', UserController.Create);



module.exports = userRouter;

