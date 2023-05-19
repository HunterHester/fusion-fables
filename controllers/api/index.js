const router = require('express').Router();
const blogRoutes = require('./blogRoutes');
const userRoutes = require('./userRoutes');
const commentRoutes = require('./commentRoutes');
const revisionRoutes = require('./revisionRoutes');

// blog, comment, and user routes
router.use('/user', userRoutes);
router.use('/blog', blogRoutes);
router.use('/comment', commentRoutes);
router.use('/rev', revisionRoutes);

module.exports = router;