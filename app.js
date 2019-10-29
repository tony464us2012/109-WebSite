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
app.get('/main', async (req, res) => {
    try{
    const allPost = await Post.find({beerName: /\w/g });
        res.json(allPost);}
        catch (err) {
            console.log({message: err})}
});

app.use('/dashboard', verify, postsRoute);
app.use('/login', loginRoute);
app.use('/register', registerRoute);

// Serve a static assets in production
if(process.env.NODE_ENV ===  'production') {
    app.use(express.static('client/build'));
    app.get('*', (req, res) => res.sendFile(path.resolve(_dirname, 'client', 'build', 'index.html')))
}


// Connect to DB
mongoose.connect(process.env.DB_CONNECTION,{ useNewUrlParser: true } ,()=> console.log('Everything is working fine..'))



// How to start listening to the server

const PORT = process.env.PORT || 4000

app.listen(PORT, console.log(`on port ${PORT}`));
