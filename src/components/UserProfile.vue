<!-- src/components/UserProfile.vue -->

<template>
  <div class="user-profile">
    <h2>{{ user.name }}</h2>
    <p>{{ user.email }}</p>
    <!-- Display user's favorites and reviews -->
    <button @click="logoutUser">Logout</button>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  computed: {
    ...mapState('user', ['user'])
  },
  methods: {
    ...mapActions('user', ['logoutUser'])
  }
}
</script>

<style scoped>
/* Add your styles here */
</style>