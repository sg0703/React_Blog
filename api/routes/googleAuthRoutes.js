const router = require('express').Router();

// bring in variables to configure this
require('dotenv').config();

// this route will verify the token given to the user by the google API, so that we can be sure they have access
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
        // If request specified a G Suite domain:
        // const domain = payload['hd'];
      
        console.log(`User ${userid} authenticated!`);
      }
      verify().catch(console.error);
});

module.exports = router;