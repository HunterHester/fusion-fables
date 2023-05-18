const router = require('express').Router();
const { User, Post, Comment } = require('../models');

router.get('/:u/:id', async (req, res) => {
    try {
        let userData;
        if(isNaN(req.params.u)) {
            userData = await User.findOne({
                where: {
                    username: req.params.u,
                },
                include: {
                    model: Post,
                    include: {
                        model: Comment,
                        include: {
                            model: User,
                            attributes: ['username'],
                        },
                        order: [['updated_at', 'DESC']]
                    },
                    order: [['updated_at', 'ASC']]
                },
                attributes: { exclude: ['password', 'email'] }
            });

        } else {
            userData = await User.findByPk(req.params.u, {
                include: {
                    model: Post,
                    include: {
                        model: Comment,
                        include: {
                            model: User,
                            attributes: ['username'],
                        },
                        order: [['updated_at', 'DESC']]
                    },
                    order: [['updated_at', 'ASC']]
                },
                attributes: { exclude: ['password', 'email'] }
            });
        }
        
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

// READ one user by ID OR Username
router.get('/:u', async (req, res) => {
    try {
        let userData;
        if(isNaN(req.params.u)) {
            userData = await User.findOne({
                where: {
                    username: req.params.u,
                },
                include: {
                    model: Post,
                    include: {
                        model: Comment,
                        include: {
                            model: User,
                            attributes: ['username'],
                        },
                        order: [['updated_at', 'DESC']]
                    },
                    order: [['updated_at', 'DESC']]
                },
                attributes: { exclude: ['password', 'email'] }
            });

        } else {
            userData = await User.findByPk(req.params.u, {
                include: {
                    model: Post,
                    include: {
                        model: Comment,
                        include: {
                            model: User,
                            attributes: ['username'],
                        },
                        order: [['updated_at', 'DESC']]
                    },
                    order: [['updated_at', 'DESC']]
                },
                attributes: { exclude: ['password', 'email'] }
            });
        }

        if (!userData) {
            // TODO: ADD .render() OF 404 PAGE
            res.status(404).json({ message: 'No user with this ID!' });
            return;
        }

        res.render('userPage', {
            user: userData.get({ plain: true }),
            posts: userData.posts.map((p) => p.get({ plain: true })),
            loggedIn: req.session.logged_in
        });

    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});

module.exports = router;