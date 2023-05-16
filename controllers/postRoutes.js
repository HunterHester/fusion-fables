const router = require('express').Router();
const { User, Post, Comment } = require('../models');

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
                        attributes: ['username']
                    },
                },
            ],
        })
        console.log(postData);
        if (!postData) {
            res.status(404).json({ message: 'No post found with that id!' });
            return;
        }
        res.render('view', postData.get({ plain: true }));
    } catch(err) {
        console.error(err);
        res.status(500).json(err);
    };
});

module.exports = router;