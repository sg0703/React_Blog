import db from '../apis/db'; // this file will set up axios connection to API
import history from '../history';

// get all posts
export const fetchPosts = () => async (dispatch) => {
    const res = await db.get('/all');

    dispatch({ type: 'FETCH_POSTS', payload: res.data });
}

// get a single post
export const fetchPost = (postId) => async (dispatch) => {
    const res = await db.get(`/one/${postId}`);

    dispatch({ type: 'FETCH_POST', payload: res.data });
}

export const signIn = (userInfo) => {
    /*** ADD IN EMAIL LATER ***/
    return {
        type: 'LOG_IN',
        payload: userInfo
    }
}

export const signOut = () => {
    return {
        type: 'LOG_OUT'
    }
}

export const writePost = (postData) => async (dispatch, getState) => {
    const { token, userId, userEmail, userActualName } = getState().auth.userInfo;

    const sendData = { ...postData, userId, userEmail, userActualName, token };

    await db.post('/', sendData);

    dispatch({ type: 'WRITE_POST' });

    history.push('/');
}

export const editPost = (postId, newPost) => async (dispatch, getState) => {
    const { token, userId } = getState().auth.userInfo;

    const sendData = { ...newPost, token, userId };

    const res = await db.put(`/update/${postId}`, sendData);

    dispatch({ type: 'EDIT_POST', payload: res.data });

    /** NAVIGATION REDIRECT */
    history.push('/posts');
}

export const deletePost = (postId) => async (dispatch, getState) => {
    const { token } = getState().auth.userInfo;

    await db.post(`/delete/${postId}`, { token: token });

    dispatch({ type: 'DELETE_POST', payload: postId });

    /** NAVIGATION REDIRECT */
    history.push('/posts');
}