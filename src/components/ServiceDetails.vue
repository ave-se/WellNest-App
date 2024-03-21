
<!-- src/components/ServiceDetails.vue -->

<template>
    <div v-if="serviceDetails" class="service-details p-4">
      <h1 class="text-2xl font-bold mb-4">{{ serviceDetails.title }}</h1>
      <p>{{ serviceDetails.body }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ServiceDetails',
    computed: {
      serviceDetails() {
        return this.$store.state.wellness.serviceDetails;
      }
    },
    created() {
      const id = this.$route.params.id;
      this.$store.dispatch('wellness/fetchServiceDetails', id);
    }
  }
  </script>
  
  <style scoped>
  /* Add your styles here */
  </style>