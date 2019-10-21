const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv/config');
const postsRoute = require('./post');
const loginRoute = require('./login_back');
const registerRoute= require('./register_back');
const verify = require('./verifyToken')
const Post = require('./Models/PostModel')


app.use(cors())
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Routes
app.get('/', async (req, res) => {
    try{
    const allPost = await Post.find({beerName: /\w/g });
        res.json(allPost);}
        catch (err) {
            console.log({message: err})}
});

app.use('/dashboard', verify, postsRoute);
app.use('/login', loginRoute);
app.use('/register', registerRoute);

// Connect to DB
mongoose.connect(process.env.DB_CONNECTION,{ useNewUrlParser: true } ,()=> console.log('Everything is working fine..'))



// How to start listening to the server

const PORT = process.env.PORT || 8080

app.listen(PORT, console.log(`on port ${PORT}`));
