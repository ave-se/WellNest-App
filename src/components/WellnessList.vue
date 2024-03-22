<!-- WellnessList.vue -->

<template>
  <div>
    <div v-for="service in services" :key="service.id">
      <h2>{{ service.name }}</h2>
      <p>{{ service.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      services: [],
    };
  },
  created() {
    // Fetch your services here and assign them to this.services
  },
};
</script>