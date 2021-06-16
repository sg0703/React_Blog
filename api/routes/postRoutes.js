const router = require('express').Router();
const Post = require('../models/Post'); // put in path to mongoose model here

/** DEFINE ROUTES BELOW */

router.post('/', (req,res) => {
    let post = new Post(req.body);

    post.save((err,postRes) => {
        if(err) return res.json(err);

        console.log('Post added to database!');
        res.json(postRes);
    })
}); 

router.put('/:id', async (req,res) => {
    let currentPost = await Post.findOne({ _id: req.params.id });

    if(!currentPost) {
        return res.json({ message: 'Error: post not found!' });
    }

    // pull title and content out of request
    const {title,content} = req.body;

    // update entry
    currentPost.title = title;
    currentPost.content = content;

    // save update in DB
    let updatedPost = await currentPost.save();

    if(!updatedPost) {
        return res.json({ message: 'Error updating record!' });
    }
    else {
        return res.json(updatedPost);
    }
});

module.exports = router;