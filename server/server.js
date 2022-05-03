const http = require('http');
const mongoose = require('mongoose');
const env = require('./.env');

const app = require('./app');

const PORT = process.env.PORT || 3001;

const MONGO_URL = "mongodb+srv://Jazzer:p%40ssw0rd%279%27%21@cluster0.mgq9v.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

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