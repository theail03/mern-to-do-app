const router = require("express").Router();
const TaskList = require("../models/TaskListModel");
const Task = require("../models/TaskModel");
const verify = require("../helpers/verifyToken");

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
            const updatedTaskList = await TaskList.findOneAndUpdate(
                {
                    _id: req.params.id,
                    user: req.user.id,
                },
                {
                    $set: req.body,
                },
                { new: true }
            );
            if (updatedTaskList) {
                return res.status(200).json(updatedTaskList);
            } else {
                return res.status(404).json("TaskList not found or you are not allowed!");
            }
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
            const taskList = await TaskList.findOneAndDelete({
                _id: req.params.id,
                user: req.user.id,
            });
            // delete all tasks in the taskList
            if (taskList) {
                await Task.deleteMany({ taskList: req.params.id });
                return res.status(200).json("The taskList has been deleted...");
            } else {
                return res.status(404).json("TaskList not found or you are not allowed!");
            }
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
            const taskList = await TaskList.findOne({
                _id: req.params.id,
                user: req.user.id
            });
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
            const taskLists = await TaskList.find({ 
                user: req.user.id 
            });
            return res.status(200).json(taskLists.reverse());
        } catch (err) {
            return res.status(500).json(err);
        }
    } else {
        return res.status(403).json("You are not allowed!");
    }
});

module.exports = router;