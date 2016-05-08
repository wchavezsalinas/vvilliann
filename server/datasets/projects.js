var mongoose = require('mongoose');
module.exports = mongoose.model('User', {
    title: String,
    summary: String,
    author: String,
    date: {
        type: Date,
        default: Date.now
    }
});
