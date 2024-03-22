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

const placesApiClient = axios.create({
  baseURL: 'https://api.geoapify.com/v2/places',
 
});

export default {
  getWellnessServices() {
    return apiClient.get('/posts'); // Using posts as a placeholder for wellness services
  },
  findPlaces(categories, filter, limit = 20) {
    return placesApiClient.get('/places', {
      params: {
        categories: categories,
        filter: filter,
        limit: limit,
        apiKey: process.env.VUE_APP_GEOAPIFY_API_KEY
      }
    });
  }
};