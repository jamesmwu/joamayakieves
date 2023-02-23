const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  time: {
    type: Date,
    required: false
  },
  user: {
    type: String,
    required: true
  }, 
  content: {
    type: String,
    required: true
  },
  likes: {
    type: Number,
    required: false
  }
});

const Post = mongoose.model('Post', PostSchema);
module.exports = Post;
