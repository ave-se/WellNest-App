<!-- src/components/Login.vue -->

<template>
    <div class="login">
      <form @submit.prevent="loginUser">
        <label for="email">Email:</label>
        <input id="email" v-model="credentials.email" type="email">
  
        <label for="password">Password:</label>
        <input id="password" v-model="credentials.password" type="password">
  
        <button type="submit">Login</button>
      </form>
    </div>
  </template>
  
  <script>
  import { mapActions } from 'vuex'
  
  export default {
    data() {
      return {
        credentials: {
          email: '',
          password: ''
        }
      }
    },
    methods: {
      ...mapActions('user', ['loginUser']),
      loginUser() {
        this.loginUser(this.credentials)
      }
    }
  }
  </script>
  
  <style scoped>
  /* Add your styles here */
  </style>