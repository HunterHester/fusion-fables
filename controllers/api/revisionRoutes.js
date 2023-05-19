const router = require('express').Router();
const { Post, Revision, User } = require('../../models');

// CREATE Revision
router.post('/', async (req, res) => {
    try {
        const newRevision = await Revision.create({
            revision_body: req.body.revision_body,
            post_id: req.body.post_id,
            user_id: req.session.user_id || req.body.user_id
        });

        res.status(200).json(newRevision);
        console.log('Revision created!');
    } catch (err) {
        res.status(400).json(err);
    }
});

// READ all Revisions (JSON-tests)
router.get("/", async (req, res) => {
    try {
        const revisionData = await Revision.findAll({
            include: [{
                model: User,
                attributes: ['username'],
            }, {
                model: Post
            }],
            order: [['created_at', 'ASC']]
        });

        res.status(200).json(revisionData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// READ Revisions by ID
router.get("/:id", async (req, res) => {
    try {
        const revisionData = await Revision.findAll({
            where: {
                id: req.params.id,
            },
            include: [{
                model: User,
                attributes: { exclude: ['password', 'email'] },
            }, {
                model: Post
            }],
        });

        res.status(200).json(revisionData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Update Revision
router.put('/:id', async (req, res) => {
    try {
        const updatedRevision = await Revision.update(req.body, {
            where: {
                id: req.params.id
            }
        });

        if (!updatedRevision[0]) {
            res.status(400).json({ message: "No Revision found with that id!" });
        }

        res.status(200).json(updatedRevision);
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});


// DELETE Revision
router.delete('/:id', async (req, res) => {
    try {
        const revisionData = await Revision.destroy({
            where: {
                id:req.params.id
            },
        });
    
    if (!revisionData) {
        res.status(404).json({ message: "No revision with that id!"});
        return;
    }

    res.status(200).json(revisionData);
    } catch (err) {
        res.status(500).json(err);
    } 
});

module.exports = router;