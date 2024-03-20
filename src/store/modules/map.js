// src/store/modules/map.js

import axios from 'axios'

export default {
  state: {
    locations: [],
    currentLocation: null
  },
  mutations: {
    setLocations(state, locations) {
      state.locations = locations
    },
    setCurrentLocation(state, location) {
      state.currentLocation = location
    }
  },
  actions: {
    async fetchLocations({ commit }) {
      try {
        const response = await axios.get('https://api.example.com/locations')
        commit('setLocations', response.data)
      } catch (error) {
        console.error('Error fetching locations:', error)
      }
    },
    setCurrentLocation({ commit }, location) {
      commit('setCurrentLocation', location)
    }
  }
}