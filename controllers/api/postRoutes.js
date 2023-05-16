const router = require('express').Router();
const { Post, Comment, User } = require('../../models');

// Get all Posts
router.get('/', async (req, res) => {
    try {
        const posts = await Post.findAll({
            include: [
                {
                    model: User
                },
                {
                    model: Comment,
                    include: {
                        model: User, 
                        attributes: ['username']
                    },
                },
            ],
        });
        res.status(200).json(posts);
    } catch (err) {
        console.log(err)
        res.status(500).json(err);
    }
});

// Get Post by ID
router.get("/:id", async (req, res) => {
    try {
        const postData = await Post.findOne({
            where: {
                id: req.params.id,
            },
            include: [
                {
                    model: User,
                },
                {
                    model: Comment,
                    include: {
                        model: User,
                    },
                },
            ],
        })
        console.log(postData);
        if (!postData) {
            res.status(404).json({ message: 'No post found with that id!' });
            return;
        }
        res.status(200).json(postData.get({ plain: true }));
    } catch(err) {
        console.error(err);
        res.status(500).json(err);
    };
});

// Create new Post
router.post('/', async (req, res) => {
    try {
        const newPost = await Post.create({
            title: req.body.title,
            post_body: req.body.post_body,
            user_id: req.session.user_id || req.body.user_id
        });

        res.status(200).json(newPost.get({ plain: true }));
        console.log('Post created!');
    } catch (err) {
        res.status(400).json(err);
    }
});

// Update Post
router.put('/:id', async (req, res) => {
    try {
        const updatedPost = await Post.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        if (!updatedPost[0]) {
            res.status(400).json({ message: "No post found with that id!" });
        }
        res.status(200).json(updatedPost.get({ plain: true }));
        console.log('Post updated!');
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
})

// Delete Post
router.delete('/:id', async (req, res) => {
    try {
        const postData = await Post.destroy({
            where: {
                id:req.params.id,
                user_id: req.session.user_id,
            },
        });
    
    if (!postData) {
        res.status(404).json({ message: 'No post found with that id!' });
        return;
    }

    res.status(200).json(postData);
    } catch (err) {
        res.status(500).json(err);
    } 
});

module.exports = router;