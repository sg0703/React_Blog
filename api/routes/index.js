const router = require('express').Router();
const postRoutes = require('./postRoutes');
const googleAuthRoutes = require('./googleAuthRoutes');

// define posts route, leave room for other routes (possibly custom authentication, comments) in future
router.use('/post', postRoutes);
router.use('/auth', googleAuthRoutes);

// export router 
module.exports = router;