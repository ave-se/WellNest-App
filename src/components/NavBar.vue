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
nav {
  display: flex;
  justify-content: space-around;
  padding: 20px 0;
  background-color: #f8f8f8;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

nav a {
  color: #6a1b1b;
  text-decoration: none;
  font-size: 1.2em;
}

nav a:hover {
  color: #9a6676;
}

nav a.router-link-exact-active {
  color: #692e40;;
  font-weight: bold;
}
</style>