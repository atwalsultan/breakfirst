const express = require("express");
const router = express.Router();

// Import model
const Exercise = require("../models/Exercise");

// Fetch and respond with documents/error
router.get("/", (req, res) => {
	Exercise.find()
		.then((exercise) => {
			res.status(200).send(exercise);
		})
		.catch((err) => {
			res.status(500).send(err);
		});
});

module.exports = router;