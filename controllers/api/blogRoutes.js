const router = require('express').Router();
const { Post } = require('../../models');


// get and render blog route
router.get('/', async (req, res) => {
    try {
        const existingPosts = await Post.findAll({
            attributes: ['title', 'date_created']
    });
        console.log('called');
        res.status(200).json(existingPosts);
    } catch (err) {
        res.status(400).json(err);
    }
});

// get blog by id(render larger)
router.get('/view/:id', async (req, res) => {
    try {
        const matchPost = await Post.findOne({
            where: {
                id: req.params.id,
            }
        });

        res.status(200).json(matchPost);
    } catch (err) {
        res.status(400).json(err);
    }
});

// post route
router.post('/create', async (req, res) => {
    try {
        const newPost = await Post.create({
            title: req.body.title,
            post_body: req.body.post_body,
        });

        res.status(200).json(newPost);
    } catch (err) {
        res.status(400).json(err);
    }
});

// delete route
router.delete('/:id', async (req, res) => {
    try {
        const postData = await Post.destroy({
            where: {
                id:req.params.id,
                user_id: req.session.user_id,
            },
        });
    
    if (!postData) {
        res.status(404).json({ message: "No post with this ID"});
        return;
    }

    res.status(200).json(postData);
    } catch (err) {
        res.status(500).json(err);
    } 
});

module.exports = router;