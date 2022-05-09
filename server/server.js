
const express = require('express');
const dotenv = require('dotenv').config();
const mongoose = require('mongoose');
const cors = require('cors');
const connectDB = require('./config/db');
const PORT = process.env.PORT || 3001;

const res = require('express/lib/response');

const app = express();

app.use(cors());
app.use(express.json({ limit: 1024 * 1024 * 4 }));
app.use(express.urlencoded({ extended: false }));

app.use('/user', require('./routes/userRoutes'));
app.use('/exercises', require('./routes/exerciseRoutes'));

app.listen(PORT, () => {
  connectDB();
  console.log(`Server started on port ${PORT}`);
});
