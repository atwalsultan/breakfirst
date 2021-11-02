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
        .send({ message: "Didn't find authorization header in request" });
    }
  
    // Extract token
    const token = authHeader && authHeader.split("Bearer ")[1];
    
    if (!token) {
      return res
        .status(401)
        .send({ message: "Didn't find token in authorization header" });
    }
    let payload;
    try {
        payload = await verifyToken(token);
    } catch (e) {
      return res
        .status(401)
        .send({ message: "Token is either expired or not valid" });
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