import { combineReducers } from 'redux';
import authReducer from './authReducer';
import postReducers from './postReducers';
import userPostReducers from './userPostReducers';

// placeholder
export default combineReducers ({
    auth: authReducer,
    posts: postReducers,
    user_posts: userPostReducers
});