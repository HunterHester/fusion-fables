const router = require('express').Router();
const { User, Post, Comment, Revision } = require('../models');

router.get('/:u/:id/:edit', async (req, res) => {

})

router.get('/:u/:id', async (req, res) => {
    try {
        const postData = await Post.findByPk( req.params.id, {
            include: [{
                model: User,
                attributes: { exclude: ['password', 'email'] },
            },
            {
                model: Revision,
                include: {
                    model: User,
                    attributes: ['username'],
                },
                order: [['created_at', 'ASC']]
            },
            {
                model: Comment,
                include: {
                    model: User,
                    attributes: ['id', 'username'],
                },            
                order: [['created_at', 'DESC']]
            }],
        });
        
        if (!postData) {
            res.status(404).json({ message: "No blog posts found" });
            return;
        };

        const myBlog = req.session.user_id === postData.user.id;

        // Converts to simple object array
        const post = postData.get({ plain: true });
        post['myBlog'] = myBlog;

        res.render("post", {
            post,
            loggedIn: req.session.logged_in,
            userId: req.session.user_id,
        });

    } catch(err) {
        console.log(err);
        res.status(500).json(err);
    }
});

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
                        order: [['created_at', 'DESC']]
                    }, {
                        model: User,
                        attributes: ['id', 'username']
                    }],
                    order: [['created_at', 'DESC']]
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

        // Converts to simple object array
        const postsJson = userData.posts.map((p) => p.get({ plain: true }));

        // Adds myBlog to objects in array
        const finalPosts = postsJson.map((p) => {
            p['myBlog'] = myBlog;
            return p;
        });

        res.render('userPage', {
            user: userData.get({ plain: true }),
            posts: finalPosts,
            loggedIn: req.session.logged_in,
            userId: req.session.user_id,
            myBlog,
        });

    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});

module.exports = router;