// src/store/modules/map.js

import api from '@/api'; // Updated import

export default {
    state: {
        hobbies: [], // Renamed from locations to hobbies
        currentHobby: null // Renamed from currentLocation to currentHobby
    },
    mutations: {
        setHobbies(state, hobbies) { // Renamed from setLocations to setHobbies
            state.hobbies = hobbies
        },
        setCurrentHobby(state, hobby) { // Renamed from setCurrentLocation to setCurrentHobby
            state.currentHobby = hobby
        }
    },
    actions: {
        async fetchHobbies({ commit }, category) { // Renamed from fetchLocations to fetchHobbies and added category parameter
            try {
                const response = await api.getHobbiesByCategory(category); // Updated function call
                commit('setHobbies', response.data); // Renamed from setLocations to setHobbies
            } catch (error) {
                console.error('Error fetching hobbies:', error); // Updated error message
            }
        },
        setCurrentHobby({ commit }, hobby) { // Renamed from setCurrentLocation to setCurrentHobby
            commit('setCurrentHobby', hobby); // Renamed from setCurrentLocation to setCurrentHobby
        }
    }
}