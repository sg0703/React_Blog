import React from 'react';
import { Field, reduxForm } from 'redux-form';

class CreateForm extends React.Component {
    displayError({ touched, error }) {
        if(touched && error) {
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            );
        }
    }

    displayInput = ({input, label, meta}) => {
        return (
            <div className="field">
                <label>{ label }</label>
                <input {...input} autoComplete="off" /> 
                { this.displayError(meta) }
            </div>
        );
    }

    onSubmit = (formData) => {
        //e.preventDefault(); NO EVENT OBJECT REDUX FORM TAKES CARE OF THIS
        //console.log(formValues)
        this.props.onSubmit(formData);
        console.log(formData)
    }


    render() {
        // redux form automatically passes unknown props to renderInput
        // redux form has a handleSubmit prop
        // add className error so errors will show
        return(
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
                <Field name="title" label="Enter Title" component={this.displayInput} />
                <Field name="content" label="Enter Description" component={this.displayInput} />
                <button className="ui button primary">Submit</button>
            </form>
        ); 
    }

}

const validate = (formValues) => {
    const errors = {};

    if(!formValues.title) {
        errors.title = 'You must enter a title';    
    }

    if (!formValues.description) {
        errors.description = 'You must enter a description';
    }

    return errors;
}

export default reduxForm({ form: 'createForm', validate })(CreateForm);