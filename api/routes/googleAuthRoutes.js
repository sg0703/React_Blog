const router = require('express').Router();

// bring in variables to configure this
require('dotenv').config();

// this route will verify the token given to the user by the google API, so that we can be sure they have access
// once token is verified, API will use sessions to authenticate additional requests 
// this is done to emulate creating my own user database, which i don't want to do for this project 
const {OAuth2Client} = require('google-auth-library');
const client = new OAuth2Client(process.env.CLIENT_ID);

router.post('/', async (req,res) => {
    async function verify() {
        const ticket = await client.verifyIdToken({
            idToken: req.body.token,
            audience: process.env.CLIENT_ID  
        });
        const payload = ticket.getPayload();
        const userid = payload['sub'];
        const name = payload['name'];
        const email = payload['email'];

        // If request specified a G Suite domain:
        // const domain = payload['hd'];
      
        console.log(`User ${userid} authenticated!`);

        // Now log them in using sessions
        req.session.save(() => {
            req.session.userId = userid;
            req.session.email = email;
            req.session.name = name;
            req.session.loggedIn = true;

            console.log('Session created successfully!');
            console.log(req.session)
        });


      }
      verify().catch(console.error);
});

module.exports = router;