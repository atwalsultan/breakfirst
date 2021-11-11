const express = require("express");
const router = express.Router();

// Import model
const Schedule = require("../models/Schedule");

// Fetch and respond with documents/error
router.get('/', (req, res) => {
	Schedule.findOne({ userId: req.query.id })
		.then((schedule) => {
            if(schedule !== null) {
                res.status(200).send(schedule);
            }
            else {
                res.status(404).send({message: "Schedule does not exist for user."})
            }
		})
		.catch((err) => {
			res.status(500).send(err);
		});
});

module.exports = router;