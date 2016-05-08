var BlogPosts = require('../datasets/BlogPosts');

module.exports.post = function(req, res) {

};

module.exports.get = function(req, res) {
    BlogPosts.find({})
        .exec(
            function(err, blogPosts) {
                if (err) {
                    //res.error(err);
                    console.log(error);
                } else {
                    res.json(blogPosts);
                }
            }
        );
};

module.exports.getPost = function(req, res) {
  var blogURL = req.query.blog_url;
    BlogPosts.find({'url': blogURL})
        .exec(
            function(err, blogPosts) {
                if (err) {
                    res.error(err);
                } else {
                    res.json(blogPosts[0]);
                }
            }
        );
}
