const router = require('express').Router();
const { Vote, Post } = require('../../models');

router.post('/upvote', async (req, res) => {
    try {
        // Add a vote to the Vote table
        await Vote.create({
            user_id: req.body.user_id,
            post_id: req.body.post_id,
        });

        // Increment the upvotes count of the related post
        const post = await Post.findByPk(req.body.post_id);
        post.upvotes += 1;
        await post.save();

        res.status(200).json(post);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.post('/downvote', async (req, res) => {
    try {
        // Remove a vote from the Vote table
        await Vote.destroy({
            where: {
                user_id: req.body.user_id,
                post_id: req.body.post_id,
            },
        });

        // Decrement the upvotes count of the related post
        const post = await Post.findByPk(req.body.post_id);
        post.upvotes -= 1;
        await post.save();

        res.status(200).json(post);
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;