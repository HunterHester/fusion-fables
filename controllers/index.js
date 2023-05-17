const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const userRoutes = require('./userRoutes');
const blogRoutes = require('./blogRoutes');
const commentRoutes = require('./commentRoutes');

// blog and user routes


router.use('/', homeRoutes);
router.use('/u', userRoutes);
// router.use('/b', blogRoutes);
// router.use('/c', commentRoutes);
router.use('/api', apiRoutes);

module.exports = router;