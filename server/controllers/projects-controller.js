var ProjectPosts = require('../datasets/ProjectPosts');

module.exports.post = function(req, res) {

};

module.exports.get = function(req, res) {
    ProjectPosts.find({})
        .exec(
            function(err, projectPosts) {
                if (err) {
                    res.error(err);
                } else {
                    res.json(projectPosts);
                }
            }
        );
};

module.exports.getPost = function(req, res) {
    var projectURL = req.query.project_url;
    ProjectPosts.find({
            'url': projectURL
        })
        .exec(
            function(err, projectPosts) {
                if (err) {
                    res.error(err);
                } else {
                    res.json(projectPosts[0]);
                }
            }
        );
}
