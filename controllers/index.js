const router = require('express').Router();
const userRoutes = require('./userRoutes');
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');

// blog and user routes
router.use('/u', userRoutes);
router.use('/api', apiRoutes);
router.use('/', homeRoutes);

module.exports = router;