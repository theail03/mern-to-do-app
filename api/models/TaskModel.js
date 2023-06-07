const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    taskList: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "TaskList",
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    tags: [{
        type: String,
        required: false
    }],
    customFields: [{
        type: Object,
        required: false
    }],
}, {
    timestamps: true,
    strict: true
});

module.exports = mongoose.model("Task", TaskSchema);