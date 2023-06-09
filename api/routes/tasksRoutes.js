const router = require("express").Router();
const verifyTaskUser = require("../middleware/tasksMiddleware");
const Task = require("../models/TaskModel");
const TaskList = require("../models/TaskListModel");
const { ensureAuth } = require("../middleware/authMiddleware");

// CREATE
router.post("/", ensureAuth, async (req, res) => {
    if (req.user) {
        const newTask = new Task(req.body);
        try {
            // get task list to get user id
            const taskList = await TaskList.findById(newTask.taskList);
            if (taskList.user != req.user.id) {
                return res.status(403).json("You are not allowed!");
            }
            const savedTask = await newTask.save();
            return res.status(201).json(savedTask);
        } catch (err) {
            return res.status(500).json(err);
        }
    } else {
        return res.status(403).json("You are not allowed!");
    }
});

// UPDATE
router.put("/:id", [ensureAuth, verifyTaskUser], async (req, res) => {
    try {
        const updatedTask = await Task.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            { new: true }
        );
        return res.status(200).json(updatedTask);
    } catch (err) {
        return res.status(500).json(err);
    }
});
  
// DELETE
router.delete("/:id", [ensureAuth, verifyTaskUser], async (req, res) => {
    try {
        await Task.findByIdAndDelete(req.params.id);
        return res.status(200).json("The task has been deleted...");
    } catch (err) {
        return res.status(500).json(err);
    }
});
  
// GET
router.get("/:id", [ensureAuth, verifyTaskUser], async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);
        return res.status(200).json(task);
    } catch (err) {
        return res.status(500).json(err);
    }
});

// GET ALL
router.get("/", ensureAuth, async (req, res) => {
    if (req.user) {
        try {
            // find all tasks from lists that belong to the user
            const taskLists = await TaskList.find({ user: req.user.id });
            const taskListIds = taskLists.map((taskList) => taskList._id);
            const tasks = await Task.find({ taskList: { $in: taskListIds } });
            return res.status(200).json(tasks.reverse());
        } catch (err) {
            return res.status(500).json(err);
        }
    } else {
        return res.status(403).json("You are not allowed!");
    }
});

// GET ALL TASKS FROM A LIST
router.get("/taskList/:id", ensureAuth, async (req, res) => {
    if (req.user) {
        try {
            const taskList = await TaskList.find({ user: req.user.id, _id: req.params.id });
            if (taskList.length > 0) {
                const tasks = await Task.find({ taskList: req.params.id });
                return res.status(200).json(tasks.reverse());
            } else {
                return res.status(404).json("Task list not found or you are not allowed!");
            }
        } catch (err) {
            return res.status(500).json(err);
        }
    } else {
        return res.status(403).json("You are not allowed!");
    }
});

module.exports = router;



