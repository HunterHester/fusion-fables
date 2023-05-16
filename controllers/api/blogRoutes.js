const router = require('express').Router();
const { Post, Comment, User } = require('../../models');


// Get all Posts excluding Username
router.get('/feed', async (req, res) => {
    try {
        const postData = await Post.findAll({
            include: [
                {
                    model: User,
                    attributes: ['username']
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
        posts = postData.filter((post) => post.user.id != req.session.user_id);
        res.status(200).json(posts);
    } catch (err) {
        console.log(err)
        res.status(500).json(err);
    }
});


// Get all Posts by Username
router.get('/:username', async (req, res) => {
    try {
        const user = await User.findOne({
            where: {
                username: req.params.username,
            }, include: [
                {
                    model: Post,
                    include: {
                        model: Comment,
                        include: {
                            model: User,
                        },
                    },
                },
            ],
        });
        const posts = user.posts.map((p) => p.get({ plain: true }));
        res.status(200).json(posts)
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' })
    }
});

module.exports = router;