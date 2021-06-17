import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

import PostList from './PostList';

class AllPosts extends React.Component {
    componentDidMount() {
        this.props.fetchPosts();
    }

    render() {
        return(
            <div className="ui container">
                <h1>All posts</h1>
                <div className="ui celled list">
                    <PostList posts={this.props.posts} />
                </div>
            </div>
        ); 
    }
}

const mapStateToProps = (state) => {
    return {
        posts: Object.values(state.posts)
    }
}

export default connect(mapStateToProps, { fetchPosts })(AllPosts);