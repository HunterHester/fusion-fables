const router = require('express').Router();
const { Post, Comment, User } = require('../../models');

// get blog by id(render larger)
router.get("/:id", async (req, res) => {
    try {
        const postData = await Post.findOne({
            where: {
                id: req.params.id,
            },
            attributes: ["id", "title", "post_body", "date_created"],
            include: [
                {
                    model: Comment,
                    attributes: [
                        "id",
                        "user_id",
                        "comment_body",
                        "date_created",
                        "post_id"
                    ],
                    include: {
                        model: User,
                        attributes: ["username"],
                    },
                },
                {
                    model: User,
                    attributes: ["username"],
                },
            ],
        })

        if (!postData) {
            res.status(404).json({ message: "No blog posts found" });
            return;
        }
        const post = postData.get({ plain: true });
        res.render("view", {
            post
        });
    } catch(err) {
        console.log(err);
        res.status(500).json(err);
    };
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
router.post('/create', async (req, res) => {
    try {
        const newPost = await Post.create({
            title: req.body.title,
            post_body: req.body.post_body,
        });

        res.status(200).json(newPost);
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