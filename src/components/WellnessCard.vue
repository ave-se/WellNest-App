<!-- src/components/WellnessCard.vue -->

<template>
  <div class="wellness-card">
    <img :src="service.image" alt="Service Image">
    <h2>{{ service.name }}</h2>
    <p>{{ service.description }}</p>
    <p>Rating: {{ service.rating }}</p>
  </div>
</template>

<script>
export default {
  props: {
    service: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
/* Add your styles here */
</style>