const router = require("express").Router();
const Task = require("../models/Task");
const TaskList = require("../models/TaskList");
const verify = require("../verifyToken");

// CREATE
router.post("/", verify, async (req, res) => {
    if (req.user) {
        const newTask = new Task(req.body);
        try {
            const savedTask = await newTask.save();
            res.status(201).json(savedTask);
        } catch (err) {
            res.status(500).json(err);
        }
    } else {
        res.status(403).json("You are not allowed!");
    }
});

// UPDATE
router.put("/:id", verify, async (req, res) => {
    if (req.user) {
        try {
            const updatedTask = await Task.findByIdAndUpdate(
                req.params.id,
                {
                    $set: req.body,
                },
                { new: true }
            );
            res.status(200).json(updatedTask);
        } catch (err) {
            res.status(500).json(err);
        }
    } else {
        res.status(403).json("You are not allowed!");
    }
});
  
// DELETE
router.delete("/:id", verify, async (req, res) => {
    if (req.user) {
        try {
            await Task.findByIdAndDelete(req.params.id);
            res.status(200).json("The task has been deleted...");
        } catch (err) {
            res.status(500).json(err);
        }
    } else {
        res.status(403).json("You are not allowed!");
    }
});
  
// GET
// still doesn't check if the user is the owner of the task
router.get("/:id", verify, async (req, res) => {
    if (req.user) {
        try {
            const task = await Task.findById(req.params.id);
            res.status(200).json(task);
        } catch (err) {
            res.status(500).json(err);
        }
    } else {
        res.status(403).json("You are not allowed!");
    }
});

// GET ALL
router.get("/", verify, async (req, res) => {
    if (req.user) {
        try {
            // find all tasks from lists that belong to the user
            const taskLists = await TaskList.find({ user: req.user.id });
            const taskListIds = taskLists.map((taskList) => taskList._id);
            const tasks = await Task.find({ taskList: { $in: taskListIds } });
            res.status(200).json(tasks.reverse());
        } catch (err) {
            res.status(500).json(err);
        }
    } else {
        res.status(403).json("You are not allowed!");
    }
});

// GET ALL TASKS FROM A LIST
router.get("/taskList/:id", verify, async (req, res) => {
    if (req.user) {
        try {
            const taskList = await TaskList.find({ user: req.user.id, _id: req.params.id });
            if (taskList.length > 0) {
                const tasks = await Task.find({ taskList: req.params.id });
                res.status(200).json(tasks.reverse());
            } else {
                res.status(404).json("Task list not found or you are not allowed!");
            }
        } catch (err) {
            res.status(500).json(err);
        }
    } else {
        res.status(403).json("You are not allowed!");
    }
});

module.exports = router;



