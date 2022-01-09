const router = require("express").Router();
const TaskList = require("../models/TaskList");
const verify = require("../verifyToken");

// create
router.post("/", async (req, res) => {
    const newTaskList = new TaskList(req.body);
    try {
        const savedTaskList = await newTaskList.save();
        res.status(201).json(savedTaskList);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;