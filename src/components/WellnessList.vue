<!-- src/components/WellnessList.vue -->

<template>
  <div class="wellness-list">
    <wellness-card v-for="service in services" :key="service.id" :service="service" />
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import WellnessCard from './WellnessCard.vue'

export default {
  components: {
    WellnessCard
  },
  computed: {
    ...mapState('wellness', ['services'])
  },
  methods: {
    ...mapActions('wellness', ['fetchServices'])
  },
  created() {
    this.fetchServices()
  }
}
</script>

<style scoped>
/* Add your styles here */
</style>