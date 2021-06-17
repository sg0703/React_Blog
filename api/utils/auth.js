// bring in variables to configure this
require('dotenv').config();

const {OAuth2Client} = require('google-auth-library');
const client = new OAuth2Client(process.env.CLIENT_ID);

const withAuth = (req, res, next) => {

    async function verify() {
        const ticket = await client.verifyIdToken({
            idToken: req.body.token,
            audience: process.env.CLIENT_ID  
        });
    
        const payload = ticket.getPayload();
        //const userid = payload['sub'];
        //const name = payload['name'];
        //const email = payload['email'];
        console.log('User authenticated!');
        return next();
    }
    verify().catch(console.error);

};
      
module.exports = withAuth;