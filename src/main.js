import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import store from './store'; // adjust the path according to your project structure
import HomeView from './views/HomeView.vue';
import ExploreView from './views/ExploreView.vue';
import UserProfile from './components/UserProfile.vue'; 
import UserSettings from './components/UserSettings.vue';
import UserLogin from './components/UserLogin.vue';

// Define your routes
const routes = [
  { path: '/', component: HomeView },
  { path: '/explore', component: ExploreView},
  { path: '/profile', component: UserProfile },
  { path: '/settings', component: UserSettings },
  { path: '/login', component: UserLogin },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(store).use(router).mount('#app');