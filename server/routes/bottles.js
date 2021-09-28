const express = require("express");
const router = express.Router();

// Import model
const Bottle = require("../models/Bottle");

// Fetch and respond with documents/error
router.get("/", (req, res) => {
	Bottle.find()
		.then((bottle) => {
			res.status(200).send(bottle);
		})
		.catch((err) => {
			res.status(500).send(err);
		});
});

router.get("/add", (req, res) => {
    let bottle = new Bottle({
        type: 'regular',
        message: `The current date and time is ${Date.now()}`
    })
	bottle.save()
        .then((bottle) => {
            res.status(200).send(bottle);
        })
        .catch((err) => {
            res.status(500).send(err);
        });
});

module.exports = router;