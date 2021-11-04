const { Router } = require('express');
const router = Router();
const User = require("../models/User");

// Goal
router.post("/goal", async (req, res) => {
    const { id, goal } = req.body;

    try {
        const user = await User.findOneAndUpdate({_id: id}, {goal: goal}, {new: true});
        return res.send(user);
    }
    catch(e) {
        console.log(e);
        res.status(400).send({message: "Could not update user goal"});
    }
});

// Workspace
router.post("/workspace", async (req, res) => {
    const { id, workspace } = req.body;

    try {
        const user = await User.findOneAndUpdate({_id: id}, {workspace: workspace}, {new: true});
        return res.send(user);
    }
    catch(e) {
        console.log(e);
        res.status(400).send({message: "Could not update user workspace"});
    }
});

module.exports = router;