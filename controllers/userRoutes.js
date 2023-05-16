const router = require('express').Router();
const { User, Post, Comment } = require('../models');

// Find one user by ID OR Username
router.get('/:id', async (req, res) => {
    try {
        if(isNaN(req.params.id)) {
            const userData = await User.findOne({
                where: {
                    username: req.params.id,
                },
                attributes: [{exclude: 'password'}],
                include: {
                    model: Post,
                    include: {
                        model: Comment,
                        include: {
                            model: User,
                            attributes: ['username']
                        }
                    }
                }
            });

            if (!userData) {
                res.status(404).json({ message: 'No user with this ID!' });
                return;
            }

            res.status(200).json(userData);
        } else {
            const userData = await User.findByPk(req.params.id, {
                attributes: [{exclude: 'password'}],
                include: {
                    model: Post,
                    include: {
                        model: Comment,
                        include: {
                            model: User,
                            attributes: ['username']
                        }
                    }
                }
            });

            if (!userData) {
                res.status(404).json({ message: 'No user with this ID!' });
                return;
            }

            res.render('userPage', {
                user: userData.get({ plain: true }),
                posts: userData.posts.map((p) => p.get({ plain: true }))
            });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});

module.exports = router;