const router = require('express').Router();
const blogRoutes = require('./blogRoutes');
const userRoutes = require('./userRoutes');
const commentRoutes = require('./commentRoutes');

// blog, comment, and user routes
router.use('/user', userRoutes);
router.use('/blog', blogRoutes);
router.use('/comment', commentRoutes)

module.exports = router;