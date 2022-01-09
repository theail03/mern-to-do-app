const router = require("express").Router();
const Task = require("../models/Task");
const verify = require("../verifyToken");

// create
router.post("/", async (req, res) => {
    const newTask = new Task(req.body);
    try {
        const savedTask = await newTask.save();
        res.status(201).json(savedTask);
    } catch (err) {
        res.status(500).json(err);
    }
    }
);

module.exports = router;



