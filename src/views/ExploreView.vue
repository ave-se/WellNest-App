<template>
    <div>
        <search-bar @search="fetchHobbies" />
        <hobbies-list :hobbies="hobbies" />
    </div>
</template>

<script>
import apiClient from '../api.js';
import SearchBar from '../components/SearchBar.vue';
import HobbiesList from '../components/HobbiesList.vue';

export default {
    name: 'ExploreView',
    components: {
        SearchBar,
        HobbiesList,
    },
    data() {
        return {
            hobbies: [],
        };
    },
    methods: {
        fetchHobbies(category) {
            apiClient.get('hobbies', { params: { category } })
                .then(response => {
                    this.hobbies = response.data;
                })
                .catch(error => {
                    console.error(error);
                });
        },
    },
}
</script>

<style scoped>
/* Add your styles here */
</style>