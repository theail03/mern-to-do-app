const router = require("express").Router();
const Task = require("../models/Task");
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
            const task = await Task.find();
            res.status(200).json(task.reverse());
        } catch (err) {
            res.status(500).json(err);
        }
    } else {
        res.status(403).json("You are not allowed!");
    }
});

module.exports = router;



