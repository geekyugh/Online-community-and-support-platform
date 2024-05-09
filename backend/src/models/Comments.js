const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  text: { type: String, required: true, },
  parentComment:{type: mongoose.Schema.Types.ObjectId, ref: 'Comment'},
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  post: { type: mongoose.Schema.Types.ObjectId, ref: 'Post' },
  likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Comment', userSchema);
