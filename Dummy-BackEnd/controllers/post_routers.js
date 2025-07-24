const express = require('express');
const fs = require('node:fs/promises');
const { getStoredPosts, storePosts } = require('../utils/posts');
const router = express.Router()


router.get('/', async (req, res) => {
    const storedPosts = await getStoredPosts();
    // await new Promise((resolve, reject) => setTimeout(() => resolve(), 1500));
    res.json({ posts: storedPosts });
});

// router.get('/', (req, res)=>{
//     return fs.readFile('./JsonFolder/posts.json', { encoding: 'utf-8' })
//     .then(data=>JSON.parse(data))
//     .then()
//     .then(data=>res.json(data))
// })

router.get('/:id', async (req, res) => {
    const storedPosts = await getStoredPosts();
    const post = storedPosts.find((post) => post.id === req.params.id);
    res.json({ post });
});

router.post('/', async (req, res) => {
    const existingPosts = await getStoredPosts();
    const postData = req.body;
    const newPost = {
        ...postData,
        id: Math.random().toString(),
    };
    const updatedPosts = [newPost, ...existingPosts];
    await storePosts(updatedPosts);
    res.status(201).json({ message: 'Stored new post.', post: newPost });
});

module.exports = router