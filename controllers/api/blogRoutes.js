const router = require('express').Router();
const { Post, Comment, User, Revision } = require('../../models');

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

// READ Posts by ID with REVISIONS
router.get("/:id", async (req, res) => {
    try {
        const postData = await Post.findAll({
            where: {
                id: req.params.id,
            },
            include: [{
                model: User,
                attributes: { exclude: ['password', 'email'] },
            },
            {
                model: Revision,
                include: {
                    model: User,
                    attributes: ['username'],
                },
                order: [['created_at', 'ASC']]
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
            return;
        }
        res.status(200).json(updatedPost);
        console.log('Post updated!');
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});


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
        res.status(404).json({ message: "No post with that id!"});
        return;
    }

    res.status(200).json(postData);
    } catch (err) {
        res.status(500).json(err);
    } 
});

module.exports = router;