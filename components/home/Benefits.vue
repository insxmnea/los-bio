<template lang="pug">
  section.container.benefits
    h2 Наши преимущества
    .grid
      .card(v-for="(b, i) in benefits" :key="i")
        .title
          img(:src="b.icon" :alt="b.title")
          h3 {{ b.title }}
        p.description {{ b.description }}
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
@use 'assets/scss/utils/_variables';

.benefits {
  margin: 147px 0px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(569px, 1fr));
  gap: 20px;
  margin-top: 80px;
}
.card {
  background: rgba(18, 31, 35, 0.50);
  padding: 40px 50px;
  border-radius: 19px;
  color: variables.$white;

  .title {
    display: flex;
    gap: 30px;
    align-items: center;
    margin-bottom: 15px;

    h3 {
      font-weight: 600;
      font-size: 30px;
    }
  }

  img {
    width: 75px;
    height: 75px;
  }

  .description {
    font-weight: 400;
    font-size: 18px;
    line-height: 137%;
  }
}
</style>