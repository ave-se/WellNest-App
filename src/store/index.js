import { createStore } from 'vuex'
import user from './modules/user'
import wellness from './modules/wellness'
import map from './modules/map'

export default createStore({
  modules: {
    user,
    wellness,
    map
  }
})