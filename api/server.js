// set up and configure express server
const express = require('express');
const session = require('express-session');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

// set up port
const PORT = process.env.PORT || 3001

// initialize server
const app = express();

// configure session
const sess = {
    resave: true,
    secret: process.env.SESSION_SECRET,
    cookie: {},
    saveUninitialized: true,
    expires: 300000,
};

app.use(session(sess));

// enable cors?
app.use(cors());

// make sure we can use JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// send all traffic to controllers files to route it appropriately
app.use(require('./routes'));

// try connecting to DB, if it succeeds start server, else display error message
mongoose
    .connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
        })
    .then(() => {
        console.log('Connected to MONGO DB ATLAS...')

        app.listen(PORT, () => {
            console.log(`App running on port ${PORT}!`);
        })
    })
    .catch((err) => {
        console.log(err);
    });
