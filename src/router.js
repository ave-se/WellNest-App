// src/router.js

import { createRouter, createWebHistory } from 'vue-router'
import HomeView from './views/HomeView.vue'
import ExploreView from './views/ExploreView.vue'
import UserProfileView from './views/UserProfileView.vue'

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
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router