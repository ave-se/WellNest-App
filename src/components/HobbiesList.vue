<!-- WellnessList.vue -->

<template>
  <div>
    <div v-for="hobby in hobbies" :key="hobby.id">
      <h2>{{ hobby.name }}</h2>
      <p>{{ hobby.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hobbies: [], 
    };
  },
  async created() {
    try {
      const response = await fetch('https://api-ninjas.com/api/hobbies');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      this.hobbies = await response.json();
    } catch (error) {
      console.error('There was a problem fetching the hobbies:', error);
    }
  },
};
</script>