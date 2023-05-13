const router = require('express').Router();
const { Comment, Post, User } = require('../models');


// get route, redirect user to blog if already signed in
router.get('/', async (req, res) => {
    try {
        res.render('home');
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// get route, redirect user to login page
router.get('/login', async (req, res) => {
    try {
        res.render("login");
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// get route, redirect user to their personal user page
router.get('/userPage', async (req, res) => {
    try{
        res.render("userPage");
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// renders create new post page view (needs auth)
router.get('/create', async (req, res) => {
    try {
        res.render('create');
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;