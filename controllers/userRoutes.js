const router = require('express').Router();
const { User, Post, Comment } = require('../models');

// READ one user by ID OR Username
router.get('/:id', async (req, res) => {
    try {
        if(isNaN(req.params.id)) {
            const userData = await User.findOne({
                where: {
                    username: req.params.id,
                },
                include: {
                    model: Post,
                    include: {
                        model: Comment,
                        include: {
                            model: User,
                            attributes: ['username'],
                        }
                    }
                },
                attributes: { exclude: ['password', 'email'] }
            });

            if (!userData) {
                res.status(404).json({ message: 'No user with this ID!' });
                return;
            }

            res.render('userPage', {
                user: userData,
                posts: userData.posts
            });
        } else {
            const userData = await User.findByPk(req.params.id, {
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

            if (!userData) {
                res.status(404).json({ message: 'No user with this ID!' });
                return;
            }

            console.log()

            res.render('userPage', {
                user: userData,
                posts: userData.posts,
                loggedIn: req.session.logged_in
            });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});

module.exports = router;