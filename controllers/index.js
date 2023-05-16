const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');

// API routes (/post, /user, and /comment)
router.use('/api', apiRoutes);

// rendering routes
router.use('/', homeRoutes);

module.exports = router;