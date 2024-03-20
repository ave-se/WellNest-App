<!-- src/views/UserProfileView.vue -->

<template>
  <div class="user-profile-view">
    <h1>Your Profile</h1>
    <p>Username: {{ user.username }}</p>
    <p>Email: {{ user.email }}</p>
    <ul>
      <li v-for="favorite in user.favorites" :key="favorite.id">{{ favorite.name }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'UserProfileView',
  data() {
    return {
      user: {
        username: 'User1',
        email: 'user1@example.com',
        favorites: [
          { id: 1, name: 'Favorite 1' },
          { id: 2, name: 'Favorite 2' },
          // Add more favorites here
        ]
      }
    }
  }
}
</script>

<style scoped>
/* Add your styles here */
</style>