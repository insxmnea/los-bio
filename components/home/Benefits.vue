<template lang="pug">
  section.container.benefits
    h2 Наши преимущества
    .grid
      .card(v-for="(b, i) in benefits" :key="i")
        img(:src="b.icon" :alt="b.title")
        h3 {{ b.title }}
        p {{ b.description }}
</template>

<script setup lang="ts">
import type { Benefits } from '~/types/benefit';

const { data }: any = await useFetch(
  'https://api.los-bio.ru/info/group/advantage'
)

const benefits: Benefits = [];

for (let i = 0; i < data.value.length; i++) {
  benefits.push(JSON.parse(data.value[i].value as string));
}
</script>

<style scoped lang="scss">
.benefits {
  margin-top: 147px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  margin-top: 20px;
}
.card {
  background: #0d1b3a;
  padding: 20px;
  border-radius: 10px;
  color: white;
}
</style>