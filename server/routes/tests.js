const express = require("express");
const router = express.Router();

// Import model
const Test = require("../models/Test");

// Fetch and respond with documents/error
router.get("/", (req, res) => {
	Test.find()
		.then((test) => {
			res.status(200).send(test);
		})
		.catch((err) => {
			res.status(500).send(err);
		});
});

module.exports = router;