const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    text: {
        type: String,
        required: true,
    },
    dateOfCreation: {
        type: Date,
        default: Date.now,
    },
    author: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('Post', postSchema);
