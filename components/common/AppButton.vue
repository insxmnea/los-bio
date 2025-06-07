<template lang="pug">
  button {{ text }}
</template>

<script setup lang="ts">
defineProps<{ text: string }>()
</script>

<style scoped lang="scss">
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
}
</style>