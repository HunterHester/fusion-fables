const router = require('express').Router();
const { Post, Comment, User } = require('../../models');

// get all (TEST IN JSON)
router.get('/', async (req, res) => {
    try {
        const commentData = await Comment.findAll();
        res.status(200).json(commentData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// create comment (req from createComment.js in comment-form partial)
router.post('/', async (req, res) => {
    try {
    const comment = await Comment.create({
        comment_body: req.body.comment_body,
        post_id: req.body.post_id,
        user_id: req.session.user_id,
    });
    
    res.status(200).json(comment);

    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;