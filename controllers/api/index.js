const router = require('express').Router();
const blogRoutes = require('./blogRoutes');
const userRoutes = require('./userRoutes');

// blog and user routes


router.use('/user', userRoutes);
router.use('/blog', blogRoutes);

module.exports = router;