const express = require('express');
const cors = require('cors');
const logger = require("morgan");


//require routes
const usersRouter = require('./routes/user')



const app = express();

app.use(cors({
    origin: 'http://localhost:3001',
}));


app.use(logger("dev"));
app.use(express.json());

//routes go here
app.use('/user', usersRouter);

//error handling on unexpected user input 
app.use('/*', async (req, res) => {
    return res.status(404).json({
        error: 'Page not found'
    })
})

module.exports = app;
