const router = require('express').Router();
const postRoutes = require('./postRoutes');

// define posts route, leave room for other routes (possibly custom authentication, comments) in future
router.use('/post', postRoutes);

// export router 
module.exports = router;