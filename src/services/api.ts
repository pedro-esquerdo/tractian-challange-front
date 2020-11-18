import axios from 'axios';

const api = axios.create({
    baseURL: 'https://tractian-challange-front.herokuapp.com/'
});

export default api;