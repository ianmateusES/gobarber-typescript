import axios from 'axios';

const api = axios.create({
  baseURL: 'http://172.31.34.63:3333',
});

export default api;
