const router = require('express').Router();
const { User, Post, Comment } = require('../models');

router.get('/:id', async (req, res) => {
    try {
        const postData = await Post.findByPk( req.params.id, {
            include: [{
                model: User,
                attributes: { exclude: ['password', 'email'] },
            }, 
            {
                model: Comment,
                include: {
                    model: User,
                    attributes: ['username'],
                },            
                order: [['updated_at', 'DESC']]
            }],
        })
        
        if (!postData) {
            res.status(404).json({ message: "No blog posts found" });
            return;
        }
        console.log(postData);
        const post = postData.get({ plain: true });
        console.log(post);
        res.render("view", {
            post,
            loggedIn: req.session.logged_in
        });
    } catch(err) {
        console.log(err);
        res.status(500).json(err);
    };
})

module.exports = router;