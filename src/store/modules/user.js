// src/store/user.js
import { auth } from '../../firebase.js';


export default {
  namespaced: true,
  state: {
    user: null
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user;
    }
  },
  actions: {
    signIn({ commit }, { email, password }) {
      return auth.signInWithEmailAndPassword(email, password)
        .then(response => {
          commit('SET_USER', response.user);
        });
    },
    signOut({ commit }) {
      return auth.signOut()
        .then(() => {
          commit('SET_USER', null);
        });
    }
  } 
};