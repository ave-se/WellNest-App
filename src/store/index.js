// src/store/index.js

import { createStore } from 'vuex';
import api from '@/api'; // Updated import

export default createStore({
  state: {
    hobbies: [], 
  },
  mutations: {
    setHobbies(state, hobbies) { 
      state.hobbies = hobbies;
    },
  },
  actions: {
    async fetchHobbies({ commit }, category) { 
      try {
        const response = await api.getHobbiesByCategory(category); 
        commit('setHobbies', response.data); 
      } catch (error) {
        console.error(`Failed to fetch hobbies: ${error.message}`); 
      }
    },
  },
});