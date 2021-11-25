const express = require("express");
const router = express.Router();

// Import model
const Group = require("../models/Group");
const User = require("../models/User");

// Fetch and respond with documents/error
router.get("/", (req, res) => {
	Group.find()
		.then((group) => {
			res.status(200).send(group);
		})
		.catch((err) => {
			res.status(500).send({message: "hi"});
		});
});

router.post("/members", async (req, res) => {
    const { members } = req.body;

    // Check needed if the user didn't pass any arguments
    try {
		let usersToSend = [];
        const users = await User.find({ '_id': { $in: members } });

		users.forEach(user => {
			let userToSend = {
				name: user.username,
				points: 10,
			};
			usersToSend.push(userToSend);
		})

        res.send(usersToSend);
    }
    catch (e) {
        console.log(e)
        res.status(400).send({ message: e });
    }
});

module.exports = router;