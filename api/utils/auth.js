// bring in variables to configure this
require('dotenv').config();

const {OAuth2Client} = require('google-auth-library');
const client = new OAuth2Client(process.env.CLIENT_ID);

const withAuth = (req, res, next) => {
    console.log('Authenticating user...');

    if(!req.body.token) {
        return res.json({message: "DENIED! MUST BE AUTHENTICATED!"});
    }

    async function verify() {
        const ticket = await client.verifyIdToken({
            idToken: req.body.token,
            audience: process.env.CLIENT_ID  
        });
    
        const payload = ticket.getPayload();
        console.log('User authenticated!');
        return next();
    }

    try {
        verify();
    }
    catch {
        return res.json({message: "COULD NOT AUTHENTICATE!"});
    }

};
      
module.exports = withAuth;