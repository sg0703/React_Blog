import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class AllPosts extends React.Component {
    componentDidMount() {
        // code in here to fetch all posts from API (still have to build that!)
        // this.props.fetchPosts();
    }

    render() {
        return(
            <div>
                <h1>All posts</h1>
            </div>
        ); 
    }
}

export default connect(null, {})(AllPosts);