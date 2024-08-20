import axios from 'axios';

const api = axios.create({
    baseURL: 'https://vbappback-74cfafa1439d.herokuapp.com/api/',
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
        'ngrok-skip-browser-warning': 'true',
    },
});

export default api;