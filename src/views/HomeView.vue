<!-- src/views/HomeView.vue -->

<template>
    <div class="home-view">
      <h1>Welcome to WellNest</h1>
      <p>A platform designed for everyone seeking to improve their health and well-being. We offer a variety of featured hobbies tailored to your needs and are constantly updating our hobbies with new and well-researched offers..</p>
      <ul>
        <li v-for="hobby in featuredHobbies" :key="hobby.id">{{ hobby.name }}</li>
      </ul>
    </div>
</template>
  
<script>
export default {
  name: 'HomeView',
  data() {
    return {
      featuredHobbies: [ // Changed from featuredServices to featuredHobbies
        { id: 1, name: 'Featured Hobby 1' },
        { id: 2, name: 'Featured Hobby 2' },
        // Add more featured hobbies here
      ]
    }
  }
}
</script>
  
<style scoped>
/* Add your styles here */
</style>