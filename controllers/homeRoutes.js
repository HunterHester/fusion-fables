const router = require('express').Router();

// get route, redirect user to blog if already signed in
router.get('/', async (req, res) => {
    try {
        res.render('home');
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
})

module.exports = router;