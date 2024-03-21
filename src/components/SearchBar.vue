<!-- src/components/SearchBar.vue -->

<template>
    <form @submit.prevent="handleSubmit">
      <input type="search" v-model="searchQuery" placeholder="Search services..." required>
      <button type="submit">Search</button>
    </form>
  </template>
  
  <script>
  export default {
    name: 'SearchBar',
    data() {
      return {
        searchQuery: ''
      };
    },
    methods: {
      handleSubmit() {
        this.$store.dispatch('wellness/setSearchQuery', this.searchQuery);
      }
    }
  }
  </script>
  
  <style scoped>
  /* Add your styles here */
  </style>