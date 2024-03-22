<template>
  <form @submit.prevent="search">
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
    search() {
      this.$emit('search', this.searchQuery);
    },
  },
}
</script>

<style scoped>
/* Add your styles here */
</style>