const router = require("express").Router();
const TaskList = require("../models/TaskList");
const Task = require("../models/Task");
const verify = require("../verifyToken");

// CREATE
router.post("/", verify, async (req, res) => {
    if (req.user) {
        const taskList = req.body;
        taskList.user = req.user.id;
        const newTaskList = new TaskList(taskList);
        try {
            const savedTaskList = await newTaskList.save();
            return res.status(201).json(savedTaskList);
        } catch (err) {
            return res.status(500).json(err);
        }
    } else {
        return res.status(403).json("You are not allowed!");
    }
});

// UPDATE
router.put("/:id", verify, async (req, res) => {
    if (req.user) {
        try {
            const updatedTaskList = await TaskList.findByIdAndUpdate(
                req.params.id,
                {
                    $set: req.body,
                },
                { new: true }
            );
            return res.status(200).json(updatedTaskList);
        } catch (err) {
            return res.status(500).json(err);
        }
    } else {
        return res.status(403).json("You are not allowed!");
    }
});
  
// DELETE
router.delete("/:id", verify, async (req, res) => {
    if (req.user) {
        try {
            await TaskList.findByIdAndDelete(req.params.id);
            // delete all tasks in the taskList
            await Task.deleteMany({ taskList: req.params.id });
            return res.status(200).json("The taskList has been deleted...");
        } catch (err) {
            return res.status(500).json(err);
        }
    } else {
        return res.status(403).json("You are not allowed!");
    }
});
  
// GET
router.get("/:id", verify, async (req, res) => {
    if (req.user) {
        try {
            const taskList = await TaskList.findById(req.params.id);
            return res.status(200).json(taskList);
        } catch (err) {
            return res.status(500).json(err);
        }
    } else {
        return res.status(403).json("You are not allowed!");
    }
});

// GET ALL
router.get("/", verify, async (req, res) => {
    if (req.user) {
        try {
            const taskLists = await TaskList.find({ user: req.user.id });
            return res.status(200).json(taskLists.reverse());
        } catch (err) {
            return res.status(500).json(err);
        }
    } else {
        return res.status(403).json("You are not allowed!");
    }
});

module.exports = router;