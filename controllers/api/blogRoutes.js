const router = require('express').Router();
const { Post, Comment, User } = require('../../models');

// get all posts (JSON-tests)
router.get("/all", async (req, res) => {
    try {
        const postData = await Post.findAll({
        attributes: ["id", "title", "post_body", "created_at", "is_public", "allow_comments"]})
        res.status(200).json(postData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// get and render blog route
router.get('/', async (req, res) => {
    try {
        const existingPosts = await Post.findAll({
            attributes: ['title', 'date_created']
    });
        console.log('called');
        res.status(200).json(existingPosts);
    } catch (err) {
        res.status(400).json(err);
    }
});

// post route
router.post('/', async (req, res) => {
    try {
        const newPost = await Post.create({
            title: req.body.title,
            post_body: req.body.post_body,
            is_public: req.body.is_public,
            allow_comments: req.body.allow_comments,
            user_id: req.session.user_id
        });
        console.log(newPost);
        res.status(200).json(newPost);
        console.log('Post created!');
    } catch (err) {
        res.status(400).json(err);
    }
});

// delete route
router.delete('/:id', async (req, res) => {
    try {
        const postData = await Post.destroy({
            where: {
                id:req.params.id,
                user_id: req.session.user_id,
            },
        });
    
    if (!postData) {
        res.status(404).json({ message: "No post with this ID"});
        return;
    }

    res.status(200).json(postData);
    } catch (err) {
        res.status(500).json(err);
    } 
});

module.exports = router;