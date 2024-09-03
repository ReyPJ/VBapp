import axios from 'axios';

const api = axios.create({
    // Prod
    baseURL: 'https://vbappback-74cfafa1439d.herokuapp.com/api/',
    // Dev
    // baseURL: 'http://localhost:8000/api/',
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
    },
});

export default api;