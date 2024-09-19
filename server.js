const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

// Middleware - 
const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(
    'mongodb+srv://millanfig:${process.env.MONGODB_PASSWORD}@cluster0.emdfm.mongodb.net/furry_godmother_grooming?retryWrites=true&w=majority&appName=Cluster0'
).then(() => {
    console.log('Connected to MongoDB');
  }).catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  })