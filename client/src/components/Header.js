import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import GoogleLogin from './GoogleLogin'

const Header = ({isSignedIn}) => {
    const renderUserLinks = () => {
        if(isSignedIn) {
            return(
                <>
                <Link to="/posts" className="item">
                    Your Posts
                </Link>
                <Link to="/create" className="item">
                    Create
                </Link>
                </>
            );
        }
    }

    return(
        <>
        <div class="ui inverted vertical masthead center aligned segment">
        <a href="https://samgates.io/">SamGates.io</a> - React Blog w/ Google Auth!</div>
        <div className="ui secondary pointing menu">
            <Link to="/" className="item">
                Home
            </Link>
            {renderUserLinks()}
        <div className="right menu">
            <GoogleLogin />
        </div>
        </div>
        </>
    );
}

const mapStateToProps = (state) => {
    return { isSignedIn: state.auth.isSignedIn };
}

export default connect(mapStateToProps, {})(Header);