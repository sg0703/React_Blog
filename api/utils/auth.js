// if user isn't logged in

const withAuth = (req, res, next) => {
    if (!req.session.loggedIn) {
        return res.json('ERROR! NOT LOGGED IN!');
    } else {
        next();
    }
};
      
module.exports = withAuth;