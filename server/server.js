// const http = require('http');
// TODO: error middleware status code handling
const express = require('express');
const dotenv = require('dotenv').config();
const mongoose = require('mongoose');
const cors = require('cors');
// TODO: figure out where db connection is going to go in codebase
const connectDB = require('./config/db');
const PORT = process.env.PORT || 3001;
// TODO: investigate path
// const path = require("path");
const res = require('express/lib/response');

// const app = require('./app');
const app = express();

app.use(cors());
app.use(express.json({ limit: 1024 * 1024 * 4 }));
app.use(express.urlencoded({ extended: false }));

app.use('/users', require('./routes/userRoutes'));
app.use('/exercises', require('./routes/exerciseRoutes'));
//app.use('/api/workouts', require('./routes/workoutRoutes'));

// TODO: build production, investigate path package

app.listen(PORT, () => {
  // starts the server and listens on the port
  connectDB();
  console.log(`Server started on port ${PORT}`);
});

// const MONGO_URL = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.mgq9v.mongodb.net/Sportify?retryWrites=true&w=majority`

// const server = http.createServer(app);

// mongoose.connection.once('open', () => {
//     console.log('MongoDB connection Ready');
// })

// mongoose.connection.on('error', (err) => {
//     console.log(`MongoDB connection Error: ${err}`)
// })

// async function startServer () {
//     await mongoose.connect(MONGO_URL)

//     server.listen(PORT, () => {
//         console.log(`Listening on port ${PORT}...`)
//     })
// }

// startServer();