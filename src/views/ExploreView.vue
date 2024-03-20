<!-- src/views/ExploreView.vue -->

<template>
    <div class="explore-view">
      <h1>Explore Wellness Services</h1>
      <ul>
        <li v-for="service in services" :key="service.id">{{ service.name }}</li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ExploreView',
    data() {
      return {
        services: [
          { id: 1, name: 'Service 1' },
          { id: 2, name: 'Service 2' },
          // Add more services here
        ]
      }
    }
  }
  </script>
  
  <style scoped>
  /* Add your styles here */
  </style>