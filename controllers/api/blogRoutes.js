const router = require('express').Router();
const { Post, Comment, User } = require('../../models');

// CREATE Post
router.post('/', async (req, res) => {
    try {
        const newPost = await Post.create({
            title: req.body.title,
            post_body: req.body.post_body,
            is_public: req.body.is_public,
            allow_comments: req.body.allow_comments,
            user_id: req.session.user_id || req.body.user_id
        });
        console.log(newPost);
        res.status(200).json(newPost);
        console.log('Post created!');
    } catch (err) {
        res.status(400).json(err);
    }
});

// READ all posts (JSON-tests)
router.get("/", async (req, res) => {
    try {
        const postData = await Post.findAll({
            include: [{
                model: User,
                attributes: { exclude: ['password', 'email'] },
            }, 
            {
                model: Comment,
                include: {
                    model: User,
                    attributes: ['username'],
                }
            }],
            order: [['updated_at', 'DESC']]
        })
        res.status(200).json(postData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// READ Posts by ID/Username
router.get("/:id", async (req, res) => {
    try {
        if (isNaN(req.params.id)) {
            const postData = await Post.findAll({
                include: [{
                    model: User,
                    attributes: { exclude: ['password', 'email'] },
                }, 
                {
                    model: Comment,
                    include: {
                        model: User,
                        attributes: ['username'],
                    }
                }],
                order: [['updated_at', 'DESC']]
            })
            userPosts = postData.filter((p) => p.user.username === req.params.id);
            res.status(200).json(userPosts);
            return;
        } else {
            const postData = await Post.findAll({
                where: {
                    id: req.params.id,
                },
                include: [{
                    model: User,
                    attributes: { exclude: ['password', 'email'] },
                }, 
                {
                    model: Comment,
                    include: {
                        model: User,
                        attributes: ['username'],
                    }
                }],
                order: [['updated_at', 'DESC']]
            })
            res.status(200).json(postData);
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

// UPDATE Post


// DELETE Post
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