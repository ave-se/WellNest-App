
// src/store/modules/user.js

import axios from 'axios'

export default {
  state: {
    user: null
  },
  mutations: {
    setUser(state, user) {
      state.user = user
    }
  },
  actions: {
    async loginUser({ commit }, credentials) {
      try {
        const response = await axios.post('https://api.example.com/login', credentials)
        commit('setUser', response.data)
      } catch (error) {
        console.error('Error logging in:', error)
      }
    },
    logoutUser({ commit }) {
      commit('setUser', null)
    },
    async updateUser({ commit }, user) {
      try {
        const response = await axios.put(`https://api.example.com/users/${user.id}`, user)
        commit('setUser', response.data)
      } catch (error) {
        console.error('Error updating user:', error)
      }
    }
  }
}