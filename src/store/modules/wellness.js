// src/store/wellness.js

import api from '@/api'; 

export default {
  namespaced: true,
  state: {
    hobbies: [], 
    searchQuery: '',
    hobbyDetails: [] 
  },
  mutations: {
    SET_HOBBIES(state, hobbies) { 
      state.hobbies = hobbies;
    },
    SET_SEARCH_QUERY(state, query) {
      state.searchQuery = query;
    },
    SET_HOBBY_DETAILS(state, details) { 
      state.hobbyDetails = details;
    }
  },
  
  actions: {
    fetchHobbies({ commit }, category) { 
      return api.getHobbiesByCategory(category).then(response => { 
        commit('SET_HOBBIES', response.data); 
      }).catch(error => {
        console.error('Failed to fetch hobbies:', error); 
      });
    },
    setSearchQuery({ commit }, query) {
      commit('SET_SEARCH_QUERY', query);
    },
   
  },
  getters: {
    filteredHobbies(state) { 
      return state.hobbies;
    }
  }
};