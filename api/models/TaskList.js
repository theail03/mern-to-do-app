const moongose = require('mongoose');

const TaskListSchema = new moongose.Schema({
    title: {
        type: String,
        required: true
    },
    customFields: [{
        type: Object,
        required: false
    }],
    tags: [{
        type: Object,
        required: false
    }],
    user: {
        type: moongose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, {
    timestamps: true,
    strict: true
});

module.exports = moongose.model('TaskList', TaskListSchema);


