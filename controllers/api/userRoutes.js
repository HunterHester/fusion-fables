const router = require('express').Router();
const { User } = require('../../models');

// create user post route
router.post('/', async (req, res) => {
    try {
        const userData = await User.create(req.body);


    }
})


// log in post route

// log out post route