const Task = require("../models/TaskModel");
const TaskList = require("../models/TaskListModel");

const verifyTaskUser = async (req, res, next) => {
    try {
        // get task to get task list id
        const task = await Task.findById(req.params.id);
        // get task list to get user id
        const taskList = await TaskList.findById(task.taskList);

        if (req.user && taskList.user == req.user.id) {
            next();
        } else {
            return res.status(403).json("You are not allowed!");
        }
    } catch (err) {
        return res.status(500).json(err);
    }
}

module.exports = verifyTaskUser;
