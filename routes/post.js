const express = require('express')
const Post = require('../Models/PostModel')
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
        beerLogo2: req.body.beer_label
    });

    try{
        const repeatedTap = await Post.find({ beerName: req.body.beerName });
        if(repeatedTap) {
         await Post.deleteOne({ beerName: req.body.Name });
        };
        await post.save();
        const allPost = await Post.find({ beerName: /\w/g });
        res.json(allPost);
    }  catch (err) {
    console.log(err)
    }});

    router.delete('/', async (req, res) => {
        try {
            const id = req.body.userid;
        await Post.deleteOne({_id: id });
        }catch (err) {
            console.log(err)
        }
    })



        module.exports = router;
