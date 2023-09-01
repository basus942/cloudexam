const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
  email: {
    type: String,
    required: true,
    lowercase: true,
    unique: true,
  },

  name: { type: String, required: true },
  comment: {
    type: String,
    required: true,
  },
});

const Comment = mongoose.model("comments", CommentSchema);
module.exports = Comment;
