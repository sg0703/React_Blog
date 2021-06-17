import axios from 'axios';

// for when i set up the API 
export default axios.create({ 
    baseURL: 'http://localhost:3001/auth'
 });