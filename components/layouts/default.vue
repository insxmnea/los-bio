<template lang="pug">
  div.layout
    Header
    main.main-content
      NuxtPage
    Footer
  </template>
  
  <script setup lang="ts">
  import Header from '~/components/layouts/Header.vue'
  import Footer from '~/components/layouts/Footer.vue'
  </script>
  
  <style lang="scss">
  .layout {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  
  .main-content {
    flex: 1;
  }
  </style>