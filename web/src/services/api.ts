import axios from 'axios';

// conectando front end com o backend
const api = axios.create({
    baseURL: 'http://localhost:3333',
})

export default api;