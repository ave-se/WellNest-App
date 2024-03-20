<!-- src/views/SettingsView.vue -->

<template>
  <div class="settings-view">
    <h1>Your Settings Here</h1>
    <p>Username: {{ user.username }}</p>
    <p>Email: {{ user.email }}</p>
  </div>
</template>

<script>
export default {
  name: 'SettingsView',
  data() {
    return {
      user: {
        username: 'User1',
        email: 'user1@example.com'
      }
    }
  }
}
</script>

<style scoped>
/* Add your styles here */
</style>