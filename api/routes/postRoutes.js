const router = require('express').Router();
const Post = require('../models/Post'); // put in path to mongoose model here

router.get('/all', async (req,res) => {
    let allPosts = await Post.find({}).limit(20);

    if(!allPosts) {
        return res.json({ message: 'Error finding posts!' });
    }

    return res.json(allPosts);
})

router.get('/one/:id', async (req,res) => {
    let onePost = await Post.findOne({_id: req.params.id});

    if(!onePost) {
        return res.json({ message: 'Error finding post with that ID!' });
    }

    return res.json(onePost);
})

router.post('/', (req,res) => {
    let post = new Post(req.body);

    console.log(req.body)

    post.save((err,postRes) => {
        if(err) return res.json(err);
        console.log(req.body);
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

router.delete('/:id', async (req,res) => {
    let deletePost = await Post.deleteOne({ _id: req.params.id });

    if(!deletePost) {
        return res.json({ message: 'Error: post not found!' });
    }
    else {
        return res.json(deletePost);
    }
});

module.exports = router;