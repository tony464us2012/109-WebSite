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
const path = require('path')


app.use(cors())
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


//Routes

app.get('/api/main', async (req, res) => {
    try{
    const allPost = await Post.find({beerName: /\w/g });
        res.json(allPost);}
        catch (err) {
            console.log({message: err})}
});

// app.get('/', (req, res) => res.sendFile(path.resolve(__dirname, 'client', 'web', 'index.html')))

app.use('/api/dashboard', verify, postsRoute);
app.use('/api/login', loginRoute);
app.use('/api/register', registerRoute);


// app.use(express.static('client/beer-app/build'));
// app.get('*', (req, res) => res.sendFile(path.resolve( __dirname, 'client', 'beer-app', 'build', 'index.html')))

// app.get('/main/menu', (req, res) => res.sendFile(path.resolve(__dirname, 'client', 'web', 'index.html')));
// app.use('/ontap', express.static('client/beer-app/build'))
// app.get('/tap', (req, res) => res.sendFile(path.resolve(__dirname, 'client', 'beer-app', 'build')))

// Serve a static assets in production

     app.use(express.static(path.resolve(__dirname, 'client', 'beer-app', 'build', 'index.html')));
     app.get('/', (req, res) => res.sendFile(path.resolve(__dirname, 'client', 'beer-app', 'build', 'index.html')));



// Connect to DB
mongoose.connect(process.env.DB_CONNECTION,{ useNewUrlParser: true } ,()=> console.log('Everything is working fine..'))



// How to start listening to the server

const PORT = process.env.PORT || 4000

app.listen(PORT, console.log(`on port ${PORT}`));
