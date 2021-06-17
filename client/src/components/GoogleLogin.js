import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

class GoogleLogin extends React.Component {
    componentDidMount() {
        // load up google api in background, set up listener, link to state
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({ 
                clientId: '1034365235471-k6j8d5e8u4hhvb0oq832fogl3m1mdg6i.apps.googleusercontent.com',
                scope: 'email'
             })
             .then(() => {
                // put auth status from google API into component level state
                this.auth = window.gapi.auth2.getAuthInstance();

                // if auth status changes, set auth state to whatever the auth status is
                this.onAuthChange(this.auth.isSignedIn.get());

                // listen for changes to auth status from google api
                this.auth.isSignedIn.listen(this.onAuthChange);
             });
        });
    }

    onAuthChange = (isSignedIn) => {
        if(isSignedIn) {
            // create object with all of users info
            const userInfo = {
                token: this.auth.currentUser.get().getAuthResponse().id_token,
                userId: this.auth.currentUser.get().getId(),
                userEmail: this.auth.currentUser.get().getBasicProfile().getEmail(),
                userActualName: this.auth.currentUser.get().getBasicProfile().getName()
            }
            
            // send info to redux store
            this.props.signIn(userInfo);
        }
        else {
            this.props.signOut();
        }
    }

    renderButton = () => {
        if(this.props.isSignedIn === null) {
            return null;
        }
        else if(this.props.isSignedIn) {
            return(
                <button className="ui google button" onClick={this.auth.signOut}>
                    <i className="google icon" />
                    Sign Out
                </button>
            );
        }
        else {
            return(
                <button className="ui google button" onClick={this.auth.signIn}>
                    <i className="google icon" />
                    Sign In
                </button>
            );
        }
    }

    render() {
        return <div>{ this.renderButton() }</div>
    }
}

const mapStateToProps = (state) => {
    return { 
        isSignedIn: state.auth.isSignedIn,
    };
}

export default connect(mapStateToProps, { signIn, signOut })(GoogleLogin);