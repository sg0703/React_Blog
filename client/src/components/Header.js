import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return(
        <div className="ui secondary pointing menu">
            <a className="active item">
                Home
            </a>
            <a className="item">
                Posts
            </a>
            <a className="item">
                Create
            </a>
        <div className="right menu">
            <a className="ui item">
            Sign In
            </a>
        </div>
        </div>
    );
}

export default Header;