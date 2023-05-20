const router = require('express').Router();
const { User, Post, Comment } = require('../models');

router.get('/:u/:id', async (req, res) => {
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
                    attributes: ['id', 'username'],
                },            
                order: [['updated_at', 'DESC']]
            }],
        });
        
        if (!postData) {
            res.status(404).json({ message: "No blog posts found" });
            return;
        };

        const post = postData.get({ plain: true });

        res.render("post", {
            post,
            loggedIn: req.session.logged_in,
            userId: req.session.user_id,
        });

    } catch(err) {
        console.log(err);
        res.status(500).json(err);
    };
})

// READ one user by ID OR Username
router.get('/:u', async (req, res) => {
    try {
        let userData;
        if(isNaN(req.params.u)) {
            userData = await User.findOne({
                where: {
                    username: req.params.u,
                },
                include: {
                    model: Post,
                    include: [{
                        model: Comment,
                        include: {
                            model: User,
                            attributes: ['id', 'username'],
                        },
                        order: [['updated_at', 'DESC']]
                    }, {
                        model: User,
                        attributes: ['id', 'username']
                    }],
                    order: [['updated_at', 'DESC']]
                },
                attributes: { exclude: ['password', 'email'] }
            });

        } else {
            userData = await User.findByPk(req.params.u, {
                include: {
                    model: Post,
                    include: {
                        model: Comment,
                        include: {
                            model: User,
                            attributes: ['id', 'username'],
                        },
                        order: [['updated_at', 'DESC']]
                    },
                    order: [['updated_at', 'DESC']]
                },
                attributes: { exclude: ['password', 'email'] }
            });
        }

        if (!userData) {
            // TODO: ADD .render() OF 404 PAGE
            res.status(404).json({ message: 'No user with this ID!' });
            return;
        }
        
        const myBlog = req.session.user_id === userData.id;
        console.log(myBlog);

        userData.posts.map((p) => p.myBlog = myBlog);
        console.log(userData.posts.map((p) => p.get({ plain: true })));

        res.render('userPage', {
            user: userData.get({ plain: true }),
            posts: userData.posts.map((p) => p.get({ plain: true })),
            loggedIn: req.session.logged_in,
            userId: req.session.user_id,
        });

    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});

module.exports = router;