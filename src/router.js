// src/router.js

import { createRouter, createWebHistory } from 'vue-router'
// import firebase from './firebase';
import {auth} from './firebase';
import HomeView from './views/HomeView.vue'
import ExploreView from './views/ExploreView.vue'
import UserProfileView from './views/UserProfileView.vue'
import UserSettings from './components/UserSettings.vue'
import UserLogin from './components/UserLogin.vue'
import ServiceDetails from './components/ServiceDetails.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: { requiresAuth: true }
  },
  {
    path: '/explore',
    name: 'explore',
    component: ExploreView,
    meta: { requiresAuth: false}
  },
  {
    path: '/profile',
    name: 'profile',
    component: UserProfileView,
    meta: { requiresAuth: false }
  },  
  {
    path: '/settings',
    name: 'settings',
    component: UserSettings,
    meta: { requiresAuth: false }
  },
  {
    path: '/login',
    name: 'login',
    component: UserLogin
  },
  {
    path: '/services/:id',
    name: 'ServiceDetails',
    component: ServiceDetails,
    meta: { requiresAuth: false }
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const currentUser = auth.currentUser;

  if (requiresAuth && !currentUser) {
    next({ name: 'login' });
  } else {
    next();
  }
});

export default router