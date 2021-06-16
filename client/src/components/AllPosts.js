import React from 'react';
import { connect } from 'react-redux';

class AllPosts extends React.Component {
    componentDidMount() {
        // code in here to fetch all posts from DB
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