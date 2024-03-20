<!-- src/views/HomeView.vue -->

<template>
    <div class="home-view">
      <h1>Welcome to WellNest</h1>
      <p>A service platform designed for everyone seeking to improve their health and well-being. We offer a variety of featured services tailored to your needs and are constantly updating our services with new and well-researched offers..</p>
      <ul>
        <li v-for="service in featuredServices" :key="service.id">{{ service.name }}</li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: 'HomeView',
    data() {
      return {
        featuredServices: [
          { id: 1, name: 'Featured Service 1' },
          { id: 2, name: 'Featured Service 2' },
          // Add more featured services here
        ]
      }
    }
  }
  </script>
  
  <style scoped>
  /* Add your styles here */
  </style>