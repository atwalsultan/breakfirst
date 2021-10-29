const User = require("../models/User");
var jwt = require("jsonwebtoken");

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


// ================================== end of JWT Code ===================================
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
    // attaching user info to incoming request
    const user = await User.findById(payload.id);
  
    if (!user) {
      return res.status(401).end();
    }
  
    req.user = user;
  
    next();
  };

  module.exports = protect