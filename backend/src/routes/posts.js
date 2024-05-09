const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Post = require('../models/Post');
const { likePost } = require('../controllers/auth');
const multer = require('multer');
const User = require('../models/User');
const upload = multer({ dest: 'uploads/',
limits: {
  fileSize: 5 * 1024 * 1024, // 5MB file size limit
},
});

// Create a new post

// router.post('/', auth, async (req, res) => {
router.post('/post', auth, upload?.single('image'), async (req, res) => {
    const user = await User.findById(req.user.id);
    console.log('user: ', user);
    if (!user) {
      throw new Error('User not found');
    }
  try {
    const { title, description, type,typeofharrassment,whyhappend,wherehappend } = req.body;
    const newPost = new Post({
        title,
        description,
        type,
        typeofharrassment,
        whyhappend,
        wherehappend,
        image: req.file ? req.file.path : null, // Assuming req.file contains the image
        createdBy: req.user.id
      });
      newPost.createdByName = user.name;
      console.log('newPost: ', newPost);
      await newPost.save();
      await res.json(newPost)
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// Get all posts
router.get('/', async (req, res) => {
    try {
      const posts = await Post.find().populate('createdBy', 'name');
      res.json(posts);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  });

  // Get a single post
router.get('/:id', async (req, res) => {
  try {
    const postId = req.params.id;
    const post = await Post.findById(postId).populate('createdBy', 'name');
    if (!post) {
      return res.status(404).json({ msg: 'Post not found' });
    }
    res.json(post);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// Like a post
router.post('/:id/like', auth, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ msg: 'Post not found' });
    }
    if (!post.likes || !Array.isArray(post.likes)) {
      post.likes = [];
    }
    if (post.likes.includes(req.user.id)) {
      return res.status(400).json({ msg: 'Post already liked' });
    }
    post.likes.push(req.user.id);
    await post.save();
    res.json({ msg: 'Post liked' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// Unlike a post
router.delete('/:id/like', auth, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ msg: 'Post not found' });
    }
    if (!post.likes || !Array.isArray(post.likes)) {
      post.likes = [];
    }
    if (!post.likes.includes(req.user.id)) {
      return res.status(400).json({ msg: 'Post not liked' });
    }
    post.likes = post.likes.filter(userId => userId.toString() !== req.user.id);
    await post.save();
    res.json({ msg: 'Post unliked' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});


// router.put('/:id/like', auth, likePost);

module.exports = router;
