const http = require('http');
const mongoose = require('mongoose');
const dotenv = require("dotenv")
dotenv.config()

const app = require('./app');

const PORT = process.env.PORT || 3001;

const MONGO_URL = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.mgq9v.mongodb.net/Sportify?retryWrites=true&w=majority`

const server = http.createServer(app);

mongoose.connection.once('open', () => {
    console.log('MongoDB connection Ready');
})

mongoose.connection.on('error', (err) => {
    console.log(`MongoDB connection Error: ${err}`)
})

async function startServer () {
    await mongoose.connect(MONGO_URL)

    server.listen(PORT, () => {
        console.log(`Listening on port ${PORT}...`)
    })
}

startServer();