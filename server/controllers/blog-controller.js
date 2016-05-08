var BlogPosts = require('../datasets/BlogPosts');

module.exports.post = function(req, res) {

};

module.exports.get = function(req, res) {
    BlogPosts.find({})
        .exec(
            function(err, blogPosts) {
                if (err) {
                    res.error(err);
                } else {
                    res.json(blogPosts);
                }
            }
        );
};
