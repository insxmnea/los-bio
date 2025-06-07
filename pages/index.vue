<template lang="pug">
  Header
  HomeSlider
  main
    Benefits
    Projects
  Footer
</template>
  
<script setup lang="ts">
import Benefits from '~/components/home/Benefits.vue';
import HomeSlider from '~/components/home/HomeSlider.vue';
import Projects from '~/components/home/Projects.vue';
import Footer from '~/components/layouts/Footer.vue';
import Header from '~/components/layouts/Header.vue'
</script>

<style lang="scss" scoped>
@use 'assets/scss/utils/_variables';

main {
  margin: 0 auto;
  max-width: variables.$content-width;
}
</style>
