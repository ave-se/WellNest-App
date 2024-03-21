// src/store/wellness.js

import api from '@/api';

export default {
  namespaced: true,
  state: {
    services: [],
    searchQuery: '',
    serviceDetails: null
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
    fetchServices({ commit }) {
      return api.getWellnessServices().then(response => {
        commit('SET_SERVICES', response.data);
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
      if (!state.searchQuery) {
        return state.services;
      }
      return state.services.filter(service =>
        service.title.toLowerCase().includes(state.searchQuery.toLowerCase())
      );
    }
  }
};