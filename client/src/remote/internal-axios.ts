import Axios from 'axios';

export const internalAxios = Axios.create({
    baseURL: 'http://localhost:3001'
});

export const authAxios = Axios.create({
    baseURL: 'http://localhost:3001',
    headers: {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`
    }
})