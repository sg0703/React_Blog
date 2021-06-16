import React from 'react';
import { connect } from 'react-redux';
import { writePost } from '../actions';
import CreateForm from './CreateForm';

class Create extends React.Component {
    onSubmit = (formData) => {
        this.props.writePost(formData);
    }

    render() {
        return(
            <div>
                <h1>Create a new post</h1>
                <CreateForm onSubmit={this.onSubmit} />
            </div>
        );
    }
}

export default connect(null, { writePost })(Create);