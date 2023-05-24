const router = require('express').Router();
const { User, Post, Comment } = require('../../models');


// CREATE User
router.post('/', async (req, res) => {
    try {
        const userData = await User.create(req.body); 

        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;
            req.session.username = userData.username;

            res.status(200).json(userData);
        });
    } catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
});


// READ all users
router.get('/', async (req, res) => {
    try {
        const userData = await User.findAll({
            attributes: {
                exclude: ['password', 'email']
            }
        });
        res.status(200).json(userData);
    } catch (err) {
    res.status(500).json(err);
    }
});


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

            res.status(200).json(userData);
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

            res.status(200).json(userData);
        }
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});


// UPDATE User
router.put('/:id', async (req, res) => {
    try {
      const userData = await User.update(req.body, {
        where: {
          id: req.params.id,
        },
        individualHooks: true
      });
      if (!userData[0]) {
        res.status(404).json({ message: 'No user with this id!' });
        return;
      }
      res.status(200).json(userData);
    } catch (err) {
      res.status(500).json(err);
    }
});


// DELETE User
router.delete('/:id', async (req, res) => {
    try {
      const deletedUser = await User.destroy({
        where: {
          id: req.params.id,
        },
      });
      if(!deletedUser) {
        res.status(404).json({ message: 'No user found with that id!' });
        return;
      }
      res.status(200).json(deletedUser);
    } catch (err) {
      res.status(500).json(err);
    }
  });


// log in post route
router.post('/login', async (req, res) => {
    try {
        const userData = await User.findOne({ where: { userName: req.body.username } });

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
            req.session.username = userData.username;

            res.json({ user: userData, message: 'Logged in!'})
        });
    
    } catch (err) {
        res.status(400).json(err);
    }
});


// logout post route
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

