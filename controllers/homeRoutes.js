const router = require('express').Router();
const { Comment, Post, User } = require('../models');


// get route, redirect user to blog if already signed in
router.get('/', async (req, res) => {
    try {
        const postData = await Post.findAll({
            include: [
                {
                    model: User
                },
                {
                    model: Comment,
                    include: {
                        model: User, 
                        attributes: ['username']
                    },
                },
            ],
            
        });
        const posts = postData.map((post) => post.get({ plain: true }));
        console.log()
        const filteredPosts = posts.filter((p) => {
            return p.user.id != req.session.user_id;
        });
        res.render('home', {
            posts: filteredPosts,
            loggedIn: req.session.logged_in,
        });
    } catch (err) {
        console.log(err)
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
        const userData = await User.findOne({
            where: {
                id: req.session.user_id,
            }, include: [
                {
                    model: Post,
                    include: {
                        model: Comment,
                        include: {
                            model: User,
                        },
                    },
                },
            ],
        });
        const user = userData.get({ plain: true });
        res.render("userPage", {
            user: user,
            posts: user.posts,
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
        res.render('about', {
            loggedIn: res.session.logged_in,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
})

// TEMPORARY LOCATION--belongs to blogRoutes
// router.get("/:user/:id", async (req, res) => {
//     try {
//         // const postData = await Post.findOne({
//         //     where: {
//         //         id: req.params.id,
//         //     },
//         //     attributes: ["id", "title", "post_body", "date_created"],
//         //     include: [
//         //         {
//         //             model: Comment,
//         //             include: {
//         //                 model: User,
//         //             },
//         //         },
//         //         {
//         //             model: User,
//         //         },
//         //     ],
//         // })
        
//         // if (!postData) {
//         //     res.status(404).json({ message: "No blog posts found" });
//         //     return;
//         // }
//         // console.log(postData);
//         // const post = postData.get({ plain: true });
//         // console.log(post);

//         const post = await fetch(`/api/user/${req.params.id}`);
//         console.log(post);
//         res.render("view", {
//             post: post,
//             comments: post.comments,
//             user: post.user,
//         });
//     } catch(err) {
//         console.log(err);
//         res.status(500).json(err);
//     };
// });
module.exports = router;