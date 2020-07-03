const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv/config');
const postsRoute = require('./routes/post');
const bottlepostsRoute = require('./routes/bottle_post');
const loginRoute = require('./routes/login_back');
const registerRoute= require('./routes/register_back');
const verify = require('./verifyToken')
const path = require('path')
const connectDB = require('./config/db')

//Connect to DB
connectDB();


app.use(cors())
app.use(express.urlencoded({ limit: '50mb', extended: false }));
app.use(express.json({limit: '50mb'}));

app.use('/api/dashboard', postsRoute);
app.use('/api/bottle', bottlepostsRoute);
app.use('/api/login', loginRoute);
app.use('/api/register', registerRoute);


if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')))
}

// How to start listening to the server

const PORT = process.env.PORT || 4000

app.listen(PORT, console.log(`on port ${PORT}`));
