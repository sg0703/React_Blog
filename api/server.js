// use express and sessions
const express = require('express');
const session = require('express-session');

// initialize express app, set port (compatible with heroku)
const app = express();
const PORT = process.env.PORT || 3001;

// import settings from .env
require('dotenv').config();

// bring in helpers
const helpers = require('./utils/helpers');

// configure express server
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// tell express to use controller files 
app.use(require('./routes'));

// start server, sync with database
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});