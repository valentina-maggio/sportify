const express = require('express');
const cors = require('cors');

const usersRouter = require('./routes/user')

const app = express();

app.use(cors({
    origin: 'http://localhost:3001',
}));

app.use(express.json());

//routes goes here
app.use('/users', usersRouter);

module.exports = app;
