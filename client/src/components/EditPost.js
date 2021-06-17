import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchPost, editPost } from '../actions';

const EditPost = (props) => {
    // set state
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    // populate form with existing values for post 
    useEffect(() => {
        props.fetchPost(props.match.params.id);
        setTitle(props.post.title);
        setContent(props.post.content);
    }, [props]);


    // when form is submitted, send to action creator to update store and query API to update DB
    const onSubmit = (newContent) => {
        props.editPost(props.match.params.id, newContent);
    }

    const renderError = () => {
        if(title === '') {
            return <div>Please enter a title</div>;
        }

        if(content === '') {
            return <div>Please enter content</div>;
        }

        return null;
    }

    return(
        <div className="ui container">
        <form onSubmit={onSubmit} className="ui form error">
            <h1>Edit Your Post</h1>
            <label>Title</label>
            <input 
                name="title" 
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <label>Post</label>
            <textarea 
                name="content" 
                value={content}
                onChange={(e) => setContent(e.target.value)}
            />
            {renderError()}
            <Link to="/posts" className="ui button">Go Back</Link>
            <button className="ui button" type="submit">Update</button>
        </form>
        </div>
    );

}

const mapStateToProps = (state, ownProps) => {
    return { post: state.posts[ownProps.match.params.id] }
}

export default connect(mapStateToProps, { fetchPost, editPost })(EditPost);