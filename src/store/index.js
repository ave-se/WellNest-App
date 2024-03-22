// src/store/index.js

import { createStore } from 'vuex';
import api from '@/api'; // Update this import

export default createStore({
  state: {
    services: [],
  },
  mutations: {
    setServices(state, services) {
      state.services = services;
    },
  },
  actions: {
    async fetchServices({ commit }) {
      try {
        const response = await api.findPlaces('Your search term'); // Update this function call
        commit('setServices', response);
      } catch (error) {
        console.error(`Failed to fetch services: ${error.message}`);
      }
    },
  },
});