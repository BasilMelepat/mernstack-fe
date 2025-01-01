import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://mernstack-be.vercel.app/api',
    withCredentials: true
});

export default instance;