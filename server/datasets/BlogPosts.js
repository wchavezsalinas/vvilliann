var mongoose = require('mongoose');
module.exports = mongoose.model('BlogPosts', {
    title: String,
    preview: String,
    content: String,
    author: String,
    date: Date,
    url: String,
}, 'BlogPosts');
