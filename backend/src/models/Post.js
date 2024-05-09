const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    type: { type: String, required: true },
    image: { type: String },
    typeofharrassment: { type: String },
    whyhappend: { type: String },
    wherehappend: { type: String },
    // likes: { type: Number, default: 0 },
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    createdByName: { type: String },
    createdAt: { type: Date, default: Date.now }
  });
  
  
  module.exports = mongoose.model('Post', postSchema);