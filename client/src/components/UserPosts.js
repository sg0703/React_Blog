import React from 'react';
import { connect } from 'react-redux';
import { fetchUserPosts } from '../actions';

import UserPostList from './PostList';

class UserPosts extends React.Component {
    componentDidMount() {
        this.props.fetchUserPosts(this.props.userId);
    }

    render() {
        return(
            <div className="ui container">
                <h1>Your posts</h1>
                <div className="ui celled list">
                    <UserPostList posts={this.props.user_posts} />
                </div>
            </div>
        ); 
    }
}

const mapStateToProps = (state) => {
    return {
        user_posts: Object.values(state.user_posts),
        userId: state.auth.userInfo.userId
    }
}

export default connect(mapStateToProps, { fetchUserPosts })(UserPosts);