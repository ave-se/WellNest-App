<!-- src/App.vue -->
<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/explore">Explore</router-link>
      <router-link to="/profile">Profile</router-link>
      <router-link to="/settings">Settings</router-link>
      <router-link to="/login">Login</router-link>
    </nav>
    <router-view />
  </div>

</template>