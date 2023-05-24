const router = require('express').Router();
const { Comment, Post, User } = require('../models');

// LANDING PAGE: Renders 'home.handlebars'
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

// LOGIN: Renders 'login.handlebars' and sign-up forms
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

// Rerouter for "My Blog" link, identifies current user and redirects to correct /u/ page (Specific Post)
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

// Rerouter for "My Blog" link, identifies current user and redirects to correct /u/ page (Full Blog)
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

// NEW POST PAGE: Renders 'create.handlebars'; redirects to /login if not logged in
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

// **WIP** REVISE PAGE: Renders revision page for editing others' posts or creating additional sections/drafts
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

// ABOUT PAGE: Renders 'about.handlebars'
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