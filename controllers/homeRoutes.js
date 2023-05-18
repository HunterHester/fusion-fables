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
                    attributes: ['username'],
                }
            }],
            order: [['updated_at', 'DESC']]
        });
        res.render('home', {
            posts: postData.map((p) => p.get({ plain: true })),
            feed: true,
            loggedIn: req.session.logged_in
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

// get route, redirect user to their personal user page
router.get('/userPage', async (req, res) => {
    try{
        const userData = await User.findByPk(req.session.user_id, {
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
            res.redirect('/login');
            return;
        }

        res.render("userPage", {
            loggedIn: req.session.logged_in,
            user: userData.get({ plain: true }),
            posts: userData.posts.map((p) => p.get({ plain: true }))
        });
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
            });
            return;
        } else {
            res.render('login');
        }
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.get('/about', async (req, res) => {
    try{
        res.render('about');
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
})

// renders view post page view (needs auth) 
// router.get('/view', async (req, res) => {
//     try {
//         res.render('view');
//     } catch (err) {
//         console.log(err);
//         res.status(500).json(err);
//     }
// });

router.get("/:id", async (req, res) => {
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
});
module.exports = router;