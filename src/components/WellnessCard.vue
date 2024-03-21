<!-- src/components/WellnessCard.vue -->

<template>
  <div class="wellness-card">
    <img :src="service.image" alt="Service Image">
    <h2>{{ service.name }}</h2>
    <p>{{ service.description }}</p>
    <p>Rating: {{ service.rating }}</p>
    <button @click="addToFavorites(service.id)">Add to Favorites</button>
    <form @submit.prevent="leaveReview(service.id)">
      <label for="review">Leave a review:</label>
      <input id="review" v-model="review" type="text">
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: {
    service: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      review: ''
    }
  },
  methods: {
    ...mapActions('wellness', ['addToFavorites', 'leaveReview']),
    addToFavorites(id) {
      this.addToFavorites(id)
    },
    leaveReview(id) {
      this.leaveReview({ id, review: this.review })
      this.review = ''
    }
  }
}
</script>

<style scoped>
/* Add your styles here */
</style>