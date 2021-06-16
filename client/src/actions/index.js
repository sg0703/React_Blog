import db from '../apis/db'; // this file will set up axios connection to API

export const fetchPosts = () => async (dispatch) => {
    const res = await db.get('/posts');
    
    dispatch({ type: 'FETCH_POSTS', payload: res.data });
}