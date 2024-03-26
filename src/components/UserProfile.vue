<!-- src/views/UserProfile.vue -->

<template>
  <div class="user-profile p-4">
    <h1 class="text-2xl font-bold mb-4">Your Profile</h1>

    <h2 class="text-xl mb-2">Your Favorites</h2>
    <ul>
      <li v-for="favorite in favorites" :key="favorite.id" class="mb-2">{{ favorite.title }}</li>
    </ul>

    <h2 class="text-xl mb-2">Your Reviews</h2>
    <ul>
      <li v-for="review in reviews" :key="review.id" class="mb-2">{{ review.text }}</li>
    </ul>

    <h2 class="text-xl mb-2">Add a Review</h2>
    <form @submit.prevent="handleSubmit">
      <label for="review-text">Review:</label>
      <textarea id="review-text" v-model="reviewText" required></textarea>
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'UserProfile',
  data() {
    return {
      reviewText: ''
    };
  },
  computed: {
    favorites() {
      // Make sure `this.user` is defined before trying to access `favorites`.
      if (this.user) {
        return this.user.favorites;
      }
      // If `this.user` is undefined, return a default value.
      return [];
    },
  },
  methods: {
    handleSubmit() {
      this.$store.dispatch('user/addReview', { text: this.reviewText })
        .then(() => {
          // Clear the review text after successful submission
          this.reviewText = '';
        })
        .catch(error => {
          // Handle the error
          console.error(error);
        });
    }
  }
}
</script>

<style scoped>
/* Add your styles here */
</style>