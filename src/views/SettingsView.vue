<!-- src/views/SettingsView.vue -->

<template>
  <div class="settings-view">
    <h1>Your Settings Here</h1>
    <form @submit.prevent="handleSubmit">
      <label for="username">Username:</label>
      <input id="username" v-model="user.username" type="text" required>

      <label for="email">Email:</label>
      <input id="email" v-model="user.email" type="email" required>

      <button type="submit">Save</button>
    </form>
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
  },
  methods: {
    handleSubmit() {
      // Handle form submission here
      console.log(`Username: ${this.user.username}, Email: ${this.user.email}`);
    }
  }
}
</script>

<style scoped>
/* Add your styles here */
</style>