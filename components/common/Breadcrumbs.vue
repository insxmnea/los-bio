<template lang="pug">
  section
    ul.breadcrumbs
      li
        nuxt-link(to="/") Главная
      li.dot •
      li
        nuxt-link(to="/") Проекты
      li.dot •
      li.active {{ title }}
</template>

<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true
  }
})
</script>

<style module lang="scss">
@use 'assets/scss/utils/_variables';

section {
  margin-top: 13px;
  margin-bottom: 37px;
}

.breadcrumbs {
  display: flex;
  gap: 14px;
  font-size: 14px;
  line-height: 141%;
  color: variables.$blue;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}


a, li {
  text-decoration: none;
  color: variables.$white;
  font-size: 14px;
  font-weight: 500;
}

a {
  transition: all 0.1s ease;

  &:hover {
    text-decoration: underline;
  }
}

.active {
  color: rgba(#fff, 0.13);
}

.dot {
  color: variables.$blue;
}
</style>