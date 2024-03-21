<!-- src/components/MapView.vue -->

<template>
    <div id="map" style="height: 400px;"></div>
  </template>
  
  <script>
  import L from 'leaflet';
  
  export default {
    name: 'MapView',
    mounted() {
      const map = L.map('map').setView([51.505, -0.09], 13);
  
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
      }).addTo(map);
    }
  }
  </script>
  
  <style scoped>
  #map { height: 100%; }
  </style>