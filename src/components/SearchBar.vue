<template>
  <form @submit.prevent="search">
    <select v-model="selectedCategory">
      <option disabled value="">Please select a category</option>
      <option>general</option>
      <option>sports_and_outdoors</option>
      <option>education</option>
      <option>collection</option>
      <option>competition</option>
      <option>observation</option>
    </select>
    <button type="submit">Search</button>
  </form>
</template>

<script>
export default {
  name: 'SearchBar',
  data() {
    return {
      selectedCategory: ''
    };
  },
  methods: {
    search() {
      this.$emit('search', this.selectedCategory);
    },
  },
}
</script>

<style scoped>
/* Add your styles here */
</style>