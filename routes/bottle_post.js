const express = require('express')
const BottlePost = require('../Models/BottleModel')
const router = express.Router()

router.get('/', async (req, res) => {
    try{
    const allPost = await BottlePost.find({name: /\w/g });
        res.json(allPost);}
        catch (err) {
            console.log({message: err})
        }
});

router.post('/', async (req, res) =>  {


    const bottle_post = new BottlePost({
        name: req.body.name,
        type: req.body.type,
        price: req.body.price
    });

    try{
        const repeatedBottle = await BottlePost.find({ name: req.body.name });
        if(repeatedBottle) {
         await BottlePost.deleteOne({ name: req.body.Name });
        };
        await bottle_post.save();
        const allPost = await BottlePost.find({ name: /\w/g });
        res.json(allPost);
    }  catch (err) {
    console.log(err)
    };
});

    router.delete('/', async (req, res) => {
        try {
            const id = req.body.userid;
        await BottlePost.deleteOne({_id: id });
        }catch (err) {
            console.log(err)
        }
    })



        module.exports = router;
