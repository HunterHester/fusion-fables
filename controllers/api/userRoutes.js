const router = require('express').Router();
const { User } = require('../../models');


// create user post route
router.post('/', async (req, res) => {
    try {
        const userData = await User.create(req.body); 

        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;

            res.status(200).json(userData);
        });
    } catch (err) {
        res.status(400).json(err);
    }
});


// log in post route
router.post('/login', async (req, res) => {
    try {
        const userData = await User.findOne({ where: { userName: req.body.userName } });

        if(!userData) {
            res.status(400).json({ message: 'Incorrect login information, please try again' });
            return;
        }

        const validatePassword = await userData.checkPassword(req.body.password);

        if(!validatePassword) {
            res
                .status(400)
                .json({ message: 'Incorrect login information, please try again'});
            return;
        }

        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;

            res.json({ user: userData, message: 'Logged in!'})
        });
    
    } catch (err) {
        res.status(400).json(err);
    }
});


// log out post route
router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

module.exports = router 

