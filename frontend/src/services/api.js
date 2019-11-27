import axios from 'axios';

const api = axios.create({
  baseURL: 'http://10.100.85.247:3000/api',
});

export default api;
