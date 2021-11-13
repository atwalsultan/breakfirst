const { Router } = require('express');
const router = Router();
const User = require("../models/User");
const Schedule = require("../models/Schedule");

// Goal
router.patch("/goal", async (req, res) => {
    const { id, goal } = req.body;

    try {
        const user = await User.findOneAndUpdate({ _id: id }, { goal: goal }, { new: true });
        return res.send(user);
    }
    catch (e) {
        console.log(e);
        res.status(400).send({ message: "Could not update user goal" });
    }
});

// Workspace
router.patch("/workspace", async (req, res) => {
    const { id, workspace } = req.body;

    try {
        const user = await User.findOneAndUpdate({ _id: id }, { workspace: workspace }, { new: true });
        return res.send(user);
    }
    catch(e) {
        res.status(400).send({ message: "Could not update user workspace" });
    }
});

// Schedule
router.post("/weekly-schedule", async (req, res) => {
    const reqBody = req.body;
    try {
        const schedule = await Schedule.create({
            monday: reqBody.monday,
            tuesday: reqBody.tuesday,
            wednesday: reqBody.wednesday,
            thursday: reqBody.thursday,
            friday: reqBody.friday,
            saturday: reqBody.saturday,
            sunday: reqBody.sunday,
            userId: reqBody.userId,
            from: reqBody.from,
            to: reqBody.to,
            silentMode: false,
            interval: 30
        });

        return res.send(schedule);
    }
    catch (err) {
        return res.status(400).send({ message: "Could not create weekly schedule. Please try again" });
    }
});

module.exports = router;