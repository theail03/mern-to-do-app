const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    completed: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true,
    strict: false
});

module.exports = mongoose.model("Task", TaskSchema);