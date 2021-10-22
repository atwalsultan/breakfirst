// Imports
const express = require('express')
const mongoose = require('mongoose')
const app = express();
const PORT = 8080;
const tests = require("./routes/tests");
const bottles = require("./routes/bottles");
const users = require("./routes/users");
var jwt = require("jsonwebtoken");
const User = require("./models/User");
// CORS
const cors = require("cors");
app.use(cors());

// Environment variables 
require('dotenv').config();

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('Connected'))
    .catch((e) => console.log(e))

app.use(express.json())

// ====================== JWT implementation =============================
// ======================== Utility method================================
const verifyToken = (token) =>
  new Promise((resolve, reject) => {
    jwt.verify(token, "secrethere@123", (err, payload) => {
      if (err) {
        return reject(err);
      }
      resolve(payload);
    });
  });

// ============================ MiddlewareAuth - Bearer ========================
const protect = async (req, res, next) => {
    const authHeader = req.headers["authorization"];
    if (!authHeader) {
      return res
        .status(401)
        .send({ message: "didn't find any token in the header" });
    }
  
    // below code says that either return token = undefined or just 2nd param from the array as split returns an array
    const token = authHeader && authHeader.split("Bearer ")[1];
    // use trim above just to remove whitesapces if any around the token
  
    if (!token) {
      return res
        .status(401)
        .send({ message: "probably you didn't send the token in the header" });
    }
    let payload;
    try {
        payload = await verifyToken(token);
    } catch (e) {
      return res
        .status(401)
        .send({ message: "token is either expired or not valid" });
    }
    const user = await User.findById(payload.id);
  
    if (!user) {
      return res.status(401).end();
    }
  
    req.user = user;
  
    next();
  };
// ================================== end of JWT Code ===================================


app.use("/auth", users);

app.use("/app", protect);
// all user specific data will be protected and must use /app/ as prefix in the route
app.get("/app/home", (req, res) => {
    res.send("<h1>Congrats now you are authenticated</h1>");
  });
app.use("/app/tests", tests);
app.use("/app/bottles", bottles);


// Specify port and listen
app.listen(PORT, () => {
    console.log(`Server is ready at ${PORT}`);
});