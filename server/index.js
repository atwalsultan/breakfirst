// Imports
const express = require('express')
const mongoose = require('mongoose')
const app = express();
const PORT = 8080;

// CORS
const cors = require("cors");
app.use(cors());

// Environment variables 
require('dotenv').config();

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('Connected'))
    .catch((e) => console.log(e))

// Specify port and listen
app.listen(PORT, () => {
    console.log(`Server is ready at ${PORT}`);
});