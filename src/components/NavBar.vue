<!-- src/components/Navbar.vue -->

<template>
  <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/explore">Explore</router-link>
      <router-link to="/profile">Profile</router-link>
      <router-link to="/settings">Settings</router-link>
      <router-link to="/login">Login</router-link>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'NavBar'
  }
  </script>
  
  <style scoped>
  /* Add your styles here */
  </style>

  