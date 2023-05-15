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

module.exports = router;