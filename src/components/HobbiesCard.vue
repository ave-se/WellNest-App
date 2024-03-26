<template>
  <div>
    <h2>{{ hobby.name }}</h2>
    <p>{{ hobby.description }}</p>
    <a :href="hobby.wikipedia_url" target="_blank">Learn more</a>
  </div>
</template>

<script>
export default {
  name: 'HobbiesCard',
  props: {
    hobby: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped>
/* Add your styles here */
</style>