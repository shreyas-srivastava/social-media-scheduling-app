

import express from 'express'

import Post from '@/pages/api/post';

const router = express.Router();

// Get all posts
router.get("/", async (req, res) => {
  const posts = await Post.find().sort("-datetime");
  res.json(posts);
});

// Create a new post
router.post("/", async (req, res) => {
  const post = new Post(req.body);
  await post.save();
  res.json(post);
});

// Update a post
router.put("/:id", async (req, res) => {
  const post = await Post.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(post);
});

// Delete a post
router.delete("/:id", async (req, res) => {
  await Post.findByIdAndDelete(req.params.id);
  res.json({ message: "Post deleted" });
});

module.exports = router;
