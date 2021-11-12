const express = require("express");
const router = express.Router();

// Import model
const Routine = require("../models/Routine");

// Fetch and respond with documents/error
router.post('/create', async (req, res) => {
	const reqBody = req.body;

    try {
        const routine = await Routine.create({
            userId: reqBody.userId,
            from: reqBody.from,
            to: reqBody.to,
            interval: reqBody.interval,
            silentMode: reqBody.silentMode,
            saveForNextTime: reqBody.saveForNextTime,
            label: reqBody.label,
            sound: reqBody.sound,
        });

        return res.send(routine);
    }
    catch (err) {
        return res.status(500).send({ message: "Could not create routine. Please try again" });
    }
});

router.get('/', (req, res) => {
	Routine.find({ userId: req.query.id })
		.then((routines) => {
            if(routines !== null) {
                res.status(200).send(routines);
            }
            else {
                res.status(404).send({message: "Routine does not exist for user."})
            }
		})
		.catch((err) => {
			res.status(500).send(err);
		});
});

module.exports = router;