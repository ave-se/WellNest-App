<!-- src/components/UserSettings.vue -->

<template>
  <div class="settings">
    <form @submit.prevent="submitForm">
      <label for="name">Name:</label>
      <input id="name" v-model="updatedUser.name" type="text">

      <label for="email">Email:</label>
      <input id="email" v-model="updatedUser.email" type="email">

      <button type="submit">Update</button>
    </form>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'UserSettings',
  data() {
    return {
      updatedUser: {
        name: '',
        email: ''
      }
    }
  },
  computed: {
    ...mapState('user', ['user'])
  },
  methods: {
    ...mapActions('user', ['updateUser']),
    submitForm() {
      this.updateUser(this.updatedUser)
    }
  },
  created() {
    this.updatedUser = { ...this.user }
  }
}
</script>

<style scoped>
/* Add your styles here */
</style>