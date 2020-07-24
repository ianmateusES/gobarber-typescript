import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.1.68:3333',
});

export default api;
