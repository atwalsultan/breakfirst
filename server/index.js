// Imports
const express = require('express')
const mongoose = require('mongoose')
const app = express();
const PORT = 8080;
const tests = require("./routes/tests");
const users = require("./routes/users");
const exercises = require("./routes/exercises");

// CORS
const cors = require("cors");
app.use(cors());

// Environment variables 
require('dotenv').config();

const protect = require('./auth/middleware')

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('Connected'))
    .catch((e) => console.log(e));

app.use(express.json());

app.use("/auth", users);
app.use("/app", protect);

// All user specific data will be protected and must use /app/ as prefix in the route
app.get("/app/home", (req, res) => {
    res.send("<h1>Congrats now you are authenticated</h1>");
  });

app.get("/app/profile", (req, res)=>{
  const user = req.user
  res.json(user)
});

app.use("/app/tests", tests);
app.use("/exercises", exercises);

// Specify port and listen
app.listen(PORT, () => {
    console.log(`Server is ready at ${PORT}`);
});