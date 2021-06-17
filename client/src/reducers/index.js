import { combineReducers } from 'redux';
import authReducer from './authReducer';
import postReducers from './postReducers';

// placeholder
export default combineReducers ({
    auth: authReducer,
    posts: postReducers,
});