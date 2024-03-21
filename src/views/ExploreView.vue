<!-- src/views/ExploreView.vue -->

<template>
    <div class="explore-view p-4">
      <h1 class="text-2xl font-bold mb-4">Explore Wellness Services</h1>
  
      <SearchBar />
  
      <ul>
        <li v-for="service in filteredServices" :key="service.id" class="mb-2">
          <router-link :to="{ name: 'ServiceDetails', params: { id: service.id } }">
            {{ service.title }}
          </router-link>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import SearchBar from '@/components/SearchBar';
  
  export default {
    components: {
      SearchBar
    },
    created() {
      this.$store.dispatch('fetchServices');
    },
    computed: {
      filteredServices() {
        return this.$store.getters.filteredServices;
      }
    }
  };
  </script>
  
  <style scoped>
  /* Add your styles here */
  </style>
  