const express = require('express');
const mongoose = require('mongoose');

// connect to database
mongoose.connect('mongodb+srv://cloudyloops:1CE6x50pEm04qaa0@cluster0.df06p.mongodb.net/')
    .then(() => console.log('MongoDB connected'))
    .catch((error) => console.log(error));

// create app
const app = express();
const PORT = process.env.PORT || 5000;