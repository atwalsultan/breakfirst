const express = require("express");
const router = express.Router();

// Import model
const Schedule = require("../models/Schedule");

// Read
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

// Update
router.patch("/change", async (req, res) => {
    const { monday, tuesday, wednesday, thursday, friday, saturday, sunday, to, from, interval, silentMode, id } = req.body;
    
    try {
        const schedule = await Schedule.findOneAndUpdate({ _id: id }, { to, from, interval, silentMode, monday, tuesday, wednesday, thursday, friday, saturday, sunday }, { new: true });
        return res.send(schedule);
    }
    catch(e) {
        res.status(400).send({ message: 'Could not update routine' });
    }
})

module.exports = router;