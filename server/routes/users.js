const { Router } = require('express');
const router = Router();
var jwt = require("jsonwebtoken");
const User = require("../models/User");
const Group = require('../models/Group');

// ========================= JWT ===========================

const generateToken = (user) => {
    return jwt.sign({ id: user._id }, "secrethere@123", { expiresIn: "10d" });
};

// Error Handler=============================================================================================
const handleError = (error) => {

    //  Duplicate account error
    if (error.code === 11000 && error.message.includes("email_1 dup key")) {
        return { message: "This email is already taken" }
    }
    else if (error.code === 11000 && error.message.includes("username_1 dup key")) {
        return { message: "This username is already taken" }
    }

    //  Validation errors
    if (error.message.includes("User validation failed")) {
        return { message: "User validation failed" }
    }
}
// =====================================================================================================

// Signnup
router.post("/signup", async (req, res) => {
    const { email, username, password } = req.body;
    if (!email || !username || !password) {
        return res
            .status(400)
            .send({ message: "Expecting email, username and password" });
    }
    try {
        const user = await User.create({ email, password, username, goal: 1, workspace: 1 });
        const token = generateToken(user);

        const newGroup = await Group.findOneAndUpdate({ _id: "619fa4f0f401c4efeb84fabc" }, { members: ["619fa082c51b07d64f34a9da", "6191b20ff6e2f980a2e6e5b8", "619fa250c51b07d64f34aa00", "619fa2b2c51b07d64f34aa15", "619fa314c51b07d64f34aa2a", "619fa359c51b07d64f34aa3f", user._id.toString()] }, { new: true });
        return res.send({ username, email, token, id: user._id, newGroup });
    }
    catch (err) {
        console.log(err);
        const error = handleError(err);
        res.status(400).send({ error })
    }
});


// Login
router.post("/login", async (req, res) => {
    const { email, username, password } = req.body;

    // Check needed if the user didn't pass any arguments
    try {
        const user = await User.findByCredentials(email, password, username);
        res.send({
            email: user.email,
            id: user._id,
            username: user.username,
            token: generateToken(user),
        });
    }
    catch (e) {
        console.log(e)
        res.status(400).send({ message: "The credentials don't match. Please try again" });
    }
});

module.exports = router;