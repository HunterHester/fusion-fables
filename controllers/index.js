const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const userRoutes = require('./userRoutes');
const postRoutes = require('./postRoutes');

// API routes (/post, /user, and /comment)
router.use('/api', apiRoutes);

// rendering routes
router.use('/u', userRoutes);
router.get('/p', postRoutes);
router.use('/', homeRoutes);

module.exports = router;