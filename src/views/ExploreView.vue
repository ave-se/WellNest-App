<template>
    <div>
        <!-- Debugging output -->
        <p>Services: {{ services.length }}</p>
        <p>Filtered Services: {{ filteredServices.length }}</p>
        <p>Paginated Services: {{ paginatedServices.length }}</p>

        <SearchBar @search="search" />

        <div v-for="service in paginatedServices" :key="service.id">
            <h2>{{ service.name }}</h2>
            <p>{{ service.description }}</p>
        </div>
        <button @click="previousPage" :disabled="currentPage === 1">Previous</button>
        <button @click="nextPage" :disabled="currentPage === numberOfPages">Next</button>
    </div>
</template>

<script>
import SearchBar from '@/components/SearchBar.vue';
import apiClient from '@/api.js'

export default {
    components: {
        SearchBar
    },
    data() {
        return {
            services: [],
            searchQuery: '',
            currentPage: 1,
            itemsPerPage: 5,
        };
    },
    async created() {
    try {
        const response = await apiClient.getWellnessServices();
        this.services = Array.isArray(response.data.data) ? response.data.data : [];
    } catch (error) {
        console.error('Failed to fetch services:', error);
        this.services = []; // Ensure services is an empty array in case of error
    }
},
    computed: {
        filteredServices() {
            if (!this.searchQuery) {
                return this.services;
            }
            return this.services.filter(service => service.name.includes(this.searchQuery));
        },
        numberOfPages() {
            return Math.ceil(this.filteredServices.length / this.itemsPerPage);
        },
        paginatedServices() {
            const start = (this.currentPage - 1) * this.itemsPerPage;
            const end = start + this.itemsPerPage;
            return this.filteredServices.slice(start, end);
        },
    },
    methods: {
        search(query) {
            this.searchQuery = query;
            this.currentPage = 1; // Reset to first page when new search is made
        },
        // Rest of your methods...
    },
};
</script>
  
  <style scoped>
 
  </style>
  