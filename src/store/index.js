
// src/store/index.js

import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import wellness from './modules/wellness'
import map from './modules/map'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user,
    wellness,
    map
  }
})