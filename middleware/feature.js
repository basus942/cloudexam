const Comment = require("../model/commentModel");
module.exports = {
  addComments: async (req, res, next) => {
    const result = req.body;
    const comment = new Comment(result);
    const saveComment = await comment.save();
    res.send({ saveComment });
  },
  allComments: async (req, res, next) => {
    try {
      const data = await Comment.find();
      res.send({ allComments: data });
    } catch (error) {
      res
        .status(500)
        .send({ error: "An error occurred while fetching comments." });
    }
  },
};
