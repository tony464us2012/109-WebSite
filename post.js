const express = require('express')
const Post = require('./Models/PostModel')
const router = express.Router()

router.get('/', async (req, res) => {
    try{
    const allPost = await Post.find({beerName: /\w/g });
        res.json(allPost);}
        catch (err) {
            console.log({message: err})
        }
});

router.post('/', async (req, res) =>  {
    const post = new Post({
        beerName: req.body.beer_name,
        beerLogo: req.body.beer_label_hd,
        beerABV: req.body.beer_abv,
        beerIBU: req.body.beer_ibu,
        beerStyle: req.body.beer_style,
        brewery: req.body.brewery.brewery_name,
        ratingCount: req.body.rating_count,
        ratingScore: req.body.rating_score,
        description: req.body.beer_description,
        tap: req.body.tap
    });

    try{
        const repeatedTap = await Post.find({tap: req.body.tap });
        if(repeatedTap) {
        const newPostList = await Post.deleteOne({tap: req.body.tap });
        };
        const savedPost = await post.save();
        const allPost = await Post.find({beerName: /\w/g });
        res.json(allPost);
    }  catch (err) {
    console.log(err)
    }});

    router.delete('/', async (req, res) => {
        try {
            const id = req.body.userid;
        const newPostList = await Post.deleteOne({_id: id });
        const allPost = await Post.find({beerName: /\w/g });
            res.json(allPost);
        }catch (err) {
            console.log(err)
        }
    });



        module.exports = router;
