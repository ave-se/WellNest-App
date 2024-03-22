// src/store/wellness.js

import api from './api'; // Update this import

export default {
  namespaced: true,
  state: {
    services: [],
    searchQuery: '',
    serviceDetails: []
  },
  mutations: {
    SET_SERVICES(state, services) {
      state.services = services;
    },
    SET_SEARCH_QUERY(state, query) {
      state.searchQuery = query;
    },
    SET_SERVICE_DETAILS(state, details) {
      state.serviceDetails = details;
    }
  },
  
  actions: {
    fetchServices({ commit }, query) {
      return api.findPlaces(query).then(response => { // Update this function call
        commit('SET_SERVICES', response);
      }).catch(error => {
        console.error('Failed to fetch services:', error);
      });
    },
    setSearchQuery({ commit }, query) {
      commit('SET_SEARCH_QUERY', query);
    },
    fetchServiceDetails({ commit }, id) {
      return api.getServiceDetails(id).then(response => {
        commit('SET_SERVICE_DETAILS', response.data);
      });
    }
  },
  getters: {
    filteredServices(state) {
      return state.services;
    }
  
  }
};