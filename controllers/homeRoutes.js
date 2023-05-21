const router = require('express').Router();
const { Comment, Post, User } = require('../models');
const withAuth = require('../utils/auth');

// get route, redirect user to blog if already signed in
router.get('/', async (req, res) => {
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
                    attributes: ['id', 'username'],
                }
            }],
            order: [['updated_at', 'DESC']]
        });
        res.render('home', {
            posts: postData.map((p) => p.get({ plain: true })),
            feed: true,
            loggedIn: req.session.logged_in,
            userId: req.session.user_id,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// get route, redirect user to login page
router.get('/login', async (req, res) => {
    try {
        if (req.session.logged_in) {
            res.redirect('/');
            return;
        }
        res.render('login');
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.get('/userPage/:id', async (req, res) => {
    try{
        const userData = await User.findByPk(req.session.user_id);

        if (!userData) {
            res.redirect('/login');
            return;
        }

        res.redirect(`/u/${userData.username}/${req.params.id}`);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.get('/userPage', async (req, res) => {
    try{
        const userData = await User.findByPk(req.session.user_id);

        if (!userData) {
            res.redirect('/login');
            return;
        }

        res.redirect(`/u/${userData.username}`);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// renders create new post page view (needs auth)
router.get('/create', async (req, res) => {
    try {
        if (req.session.logged_in) {
            res.render('create', {
                loggedIn: req.session.logged_in,
                userId: req.session.user_id,
            });
            return;
        } else {
            res.redirect('/login');
        }
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// renders create new post page view (needs auth)
router.get('/revise/:id', async (req, res) => {
    try {
        if (req.session.logged_in) {
            const post = await Post.findByPk(req.params.id);

            res.render('edit-create', {
                post: post.get({ plain: true }),
                loggedIn: req.session.logged_in,
                userId: req.session.user_id,
            });
            return;
        } else {
            res.redirect('/login');
        }
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.get('/about', async (req, res) => {
    try{
        res.render('about', {
            loggedIn: req.session.logged_in,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;