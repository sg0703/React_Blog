import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer';
import postReducers from './postReducers';

// placeholder
export default combineReducers ({
    auth: authReducer,
    posts: postReducers,
    form: formReducer
});