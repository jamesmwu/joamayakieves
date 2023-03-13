const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  user: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: false
  },
  likes: {
    type: Number,
    required: false
  },
  time: {
    type: Date,
    required: false
  }
});

const Post = mongoose.model('Post', PostSchema);
module.exports = Post;
