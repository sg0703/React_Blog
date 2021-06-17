import React, { useState } from 'react';
import { connect } from 'react-redux';
import { writePost } from '../actions';

const Create = ({writePost}) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();

        let postInfo = { title, content };

        if(title !== '' && content !== '') {
            writePost(postInfo);
        }
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
            <h1>Create a new post</h1>
            <label>Enter Title</label>
            <input 
                name="title" 
                onChange={(e) => setTitle(e.target.value)}
            />
            <label>Enter Post</label>
            <textarea 
                name="content" 
                onChange={(e) => setContent(e.target.value)}
            />
            {renderError()}
            <button className="ui button" type="submit">Publish</button>
        </form>
        </div>
    );
}

export default connect(null, { writePost })(Create);