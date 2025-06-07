<template lang="pug">
  button {{ text }}
</template>

<script setup lang="ts">
defineProps<{ text: string }>()
</script>

<style scope lang="scss">
@use 'assets/scss/utils/_variables';

button {
  padding: 8px 20px;
  font-size: 14px;
  line-height: 141%;
  background: variables.$blue;
  color: variables.$white;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  font-weight: 500;
  transition: all 0.1s ease;

  &:hover {
    background: variables.$blue-hover;
  }
}
</style>