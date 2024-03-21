<!-- src/components/SignIn.vue -->

<template>
    <form @submit.prevent="handleSubmit">
      <label for="email">Email:</label>
      <input id="email" type="email" v-model="email" required>
  
      <label for="password">Password:</label>
      <input id="password" type="password" v-model="password" required>
  
      <button type="submit">Sign in</button>
    </form>
  </template>
  
  <script>
  export default {
    name: 'SignIn',
    data() {
      return {
        email: '',
        password: ''
      };
    },
    methods: {
      handleSubmit() {
        this.$store.dispatch('user/signIn', { email: this.email, password: this.password });
      }
    }
  }
  </script>
  
  <style scoped>
  /* Add your styles here */
  </style>