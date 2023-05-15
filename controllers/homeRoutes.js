const router = require('express').Router();
const { Comment, Post, User } = require('../models');


// get route, redirect user to blog if already signed in
router.get('/', async (req, res) => {
    try {
        res.render('home', {
            loggedIn: req.session.logged_in,
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
        res.render("userPage", {
            loggedIn: req.session.logged_in,
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

// TEMPORARY LOCATION--belongs to blogRoutes
router.get("/:id", async (req, res) => {
    try {
        const postData = await Post.findOne({
            where: {
                id: req.params.id,
            },
            attributes: ["id", "title", "post_body", "date_created"],
            include: [
                {
                    model: Comment,
                    attributes: [
                        "id",
                        "user_id",
                        "comment_body",
                        "date_created",
                        "post_id"
                    ],
                    include: {
                        model: User,
                        attributes: ["username"],
                    },
                },
                {
                    model: User,
                    attributes: ["username"],
                },
            ],
        })
        
        if (!postData) {
            res.status(404).json({ message: "No blog posts found" });
            return;
        }
        const post = postData.get({ plain: true });
        res.render("view", {
            post
        });
    } catch(err) {
        console.log(err);
        res.status(500).json(err);
    };
});
module.exports = router;