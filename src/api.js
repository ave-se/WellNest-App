// src/api.js

import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
});

export default {
  getWellnessServices() {
    return apiClient.get('/posts'); // Using posts as a placeholder for wellness services
  }
};