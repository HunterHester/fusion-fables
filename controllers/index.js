const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const userRoutes = require('./userRoutes');
const postRoutes = require('./postRoutes');
const commentRoutes = require('./commentRoutes');

// blog and user routes



router.use('/u', userRoutes);
router.use('/api', apiRoutes);
router.use('/:u', postRoutes);
router.use('/', homeRoutes);

module.exports = router;