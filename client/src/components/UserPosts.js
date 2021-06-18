import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

import UserPostList from './UserPostList';

class UserPosts extends React.Component {
    componentDidMount() {
        this.props.fetchPosts(this.props.userId);
    }

    render() {
        return(
            <div className="ui container">
                <h1>Your posts</h1>
                <div className="ui celled list">
                    <UserPostList posts={this.props.posts} userEmail={this.props.userEmail} />
                </div>
            </div>
        ); 
    }
}

const mapStateToProps = (state) => {
    return {
        posts: Object.values(state.posts),
        userEmail: state.auth.userInfo.userEmail
    }
}

export default connect(mapStateToProps, { fetchPosts })(UserPosts);