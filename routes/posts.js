const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

router.post('/', async (req, res) => {
    try {
        const { title, text, author } = req.body;
        const post = new Post({
            title,
            text,
            author,
        });
        await post.save();
        res.status(201).json({ message: 'Post created successfully', post });
    } catch (err) {
        res.status(500).json({ message: 'Error creating post', error: err.message });
    }
});

router.get('/', async (req, res) => {
    try {
        const posts = await Post.find();
        res.status(200).json(posts);
    } catch (err) {
        res.status(500).json({ message: 'Error retrieving posts', error: err.message });
    }
});

router.put('/:postId', async (req, res) => {
    try {
        const { title, text } = req.body;
        const updatedPost = await Post.findByIdAndUpdate(req.params.postId, { title, text }, { new: true });
        res.status(200).json({ message: 'Post updated successfully', post: updatedPost });
    } catch (err) {
        res.status(500).json({ message: 'Error updating post', error: err.message });
    }
});

router.delete('/:postId', async (req, res) => {
    try {
        await Post.findByIdAndDelete(req.params.postId);
        res.status(200).json({ message: 'Post deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Error deleting post', error: err.message });
    }
});

module.exports = router;
