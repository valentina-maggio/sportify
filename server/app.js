const express = require('express');
const cors = require('cors');
const logger = require("morgan");
const bodyParser = require('body-parser');


//require routes
const usersRouter = require('./routes/user')



const app = express();

app.use(cors({
    origin: 'http://localhost:3000',
}));

//body parser middleware setup
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());





app.use(logger("dev"));
app.use(express.json());

//routes go here
app.use('/users', usersRouter);

//error handling on unexpected user input 
app.use('/*', async (req, res) => {
    return res.status(404).json({
        error: 'Page not found'
    })
})

module.exports = app;
