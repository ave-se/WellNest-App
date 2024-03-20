// src/store/modules/wellness.js

import axios from 'axios'

export default {
  state: {
    services: []
  },
  mutations: {
    setServices(state, services) {
      state.services = services
    }
  },
  actions: {
    async fetchServices({ commit }) {
      try {
        const response = await axios.get('https://api.example.com/wellness-services')
        commit('setServices', response.data)
      } catch (error) {
        console.error('Error fetching services:', error)
      }
    }
  }
}