import db from '../apis/db'; // this file will set up axios connection to API

export const fetchPosts = () => async (dispatch) => {
    const res = await db.get('/all');

    dispatch({ type: 'FETCH_POSTS', payload: res.data });
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