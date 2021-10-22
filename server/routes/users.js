const {Router} = require('express');
const router = Router();
var jwt = require("jsonwebtoken");
const User = require("../models/User");

// ========================= JWT ===========================

const generateToken = (user) => {
    return jwt.sign({ id: user._id }, "secrethere@123", { expiresIn: "10d" });
  };

// Error Handler=============================================================================================
 const handleError = (error) =>{
     console.log(error.message, error.code)
     let errors = {email:"", password:"", username: ""}

    //  duplicate account errors 
    if (error.code === 11000 && error.message.includes("email_1 dup key") ){
        errors.email = "Account already registerd with this email"
        return errors
    }
    else if(error.code === 11000 && error.message.includes("username_1 dup key")){
        errors.username = "This username is already taken"
        return errors
    }


    //  validation errors
    if(error.message.includes("user validation failed")){
        Object.values(error.errors).forEach(({properties})=>{
            errors[properties.path] = properties.message;
        })
        
        return errors;
    }
 }
// =====================================================================================================

// signnup
router.post("/signup", async(req, res)=>{
    const {email, username, password} = req.body;
    if (!email || !username || !password) {
        return res
          .status(400)
          .send({ message: "expecting email, name and password" });
      }
    try{
        const user = await User.create({email, password, username});
        const token = generateToken(user);
        return res.status(201).json({username, email, token });
    }
    catch(err){
       const errors = handleError(err);
       res.status(400).json({errors})
    }

});


// login
router.post("/login", async (req, res)=>{
    const {email, username, password} = req.body;
    // check needed if the user didn't pass any arguments
    try {
        const user = await User.findByCredentials(email, password, username); 
        res.send({
            email: user.email,
            id: user._id,
            userame: user.username,
            token: generateToken(user)
        });
      } 
      catch (e) {
        console.log(e);
        res.status(400).send(e.Error);
      }
});


module.exports = router;