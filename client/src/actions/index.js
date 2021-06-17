import db from '../apis/db'; // this file will set up axios connection to API
import history from '../history';

export const fetchPosts = () => async (dispatch) => {
    const res = await db.get('/all');

    dispatch({ type: 'FETCH_POSTS', payload: res.data });
}

export const fetchUserPosts = (userId) => async (dispatch) => {
    const res = await db.get(`/all/${userId}`);

    dispatch({ type: 'FETCH_USER_POSTS', payload: res.data });
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