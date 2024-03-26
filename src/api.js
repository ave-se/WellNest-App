// api.js

import axios from 'axios';
// import ExploreView from './views/ExploreView.vue';


const apiClient = axios.create({
  baseURL: 'https://api.api-ninjas.com/v1/',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'X-Api-Key': process.env.VUE_APP_HOBBIES_API_KEY,
  },
});

export default apiClient;


 