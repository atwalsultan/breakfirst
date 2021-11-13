const express = require("express");
const router = express.Router();

// Import model
const Routine = require("../models/Routine");

// Create
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
        });

        return res.send(routine);
    }
    catch (err) {
        return res.status(500).send({ message: "Could not create routine. Please try again" });
    }
});

// Read
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

// Update
router.patch("/change", async (req, res) => {
    const { id, to, from, interval, silentMode, label, saveForNextTime } = req.body;
    
    try {
        const routine = await Routine.findOneAndUpdate({ _id: id }, { to, from, interval, silentMode, label, saveForNextTime }, { new: true });
        return res.send(routine);
    }
    catch(e) {
        res.status(400).send({ message: 'Could not update routine' });
    }
});

// Delete
router.delete("/delete", async(req, res) => {
    const { id } = req.body;
    
    try {
        const routine = await Routine.findOneAndDelete({ _id: id });
        return res.send(routine);
    }
    catch(e) {
        res.status(400).send({ message: "Could not delete routine" });
    }
});

module.exports = router;