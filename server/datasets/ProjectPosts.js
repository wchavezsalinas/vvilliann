var mongoose = require('mongoose');
module.exports = mongoose.model('ProjectPosts', {
    title: String,
    preview: String,
    content: String,
    author: String,
    date: Date,
    url: String,
}, 'ProjectPosts');
