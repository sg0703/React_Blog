import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return(
        <div className="ui secondary pointing menu">
            <Link to="/" className="item">
                Home
            </Link>
            <Link to="/posts" className="item">
                Your Posts
            </Link>
            <Link to="/create" className="item">
                Create
            </Link>
        <div className="right menu">
            <Link to="/signin" className="ui item">
            Sign In
            </Link>
        </div>
        </div>
    );
}

export default Header;