// src/router.js

import { createRouter, createWebHistory } from 'vue-router'
import HomeView from './views/HomeView.vue'
import ExploreView from './views/ExploreView.vue'
import UserProfileView from './views/UserProfileView.vue'
import UserSettings from './components/UserSettings.vue'
import UserLogin from './components/UserLogin.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/explore',
    name: 'explore',
    component: ExploreView
  },
  {
    path: '/profile',
    name: 'profile',
    component: UserProfileView
  },
  {
    path: '/settings',
    name: 'settings',
    component: UserSettings
  },
  {
    path: '/login',
    name: 'login',
    component: UserLogin
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router