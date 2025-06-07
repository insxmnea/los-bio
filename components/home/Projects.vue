<template lang="pug">
  section.container.projects
    h2 Проекты
    .grid
      NuxtLink.card(v-for="(p, i) in projects" :key="i" :to="`/projects/${p.slug}`")
        img(:src="getImageUrl(p.photos[0].name)" alt="Проект")
        h3.title {{ p.title }}
        p.equipment {{ p.equipment }}
        hr
        span.works Тип работы:
        span {{ p.works }}
        hr
        span.customer Заказчик:
        span {{ p.customer }}
</template>

<script setup lang="ts">
import type { Projects } from '~/types/project';

const { data }: any = await useFetch(
  'https://api.los-bio.ru/projects'
)

const projects: Projects = data.value;

const getImageUrl = (image: string) => {
  return `https://api.los-bio.ru/files/projects/${image}`;
};
</script>

<style scoped lang="scss">
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(376px, 1fr));
  gap: 20px;
  margin-top: 90px;
}
.card {
  width: 377px;
  background: rgba(18,21,35,0.49);
  border: 1px solid rgba(255, 255, 255, 0.3);
  padding: 38px;
  border-radius: 19px;
  justify-self: center;
  text-decoration: none;
  color: white;
}

.works, .customer {
  opacity: 0.5;
  margin-right: 6px;
}

.title {
  margin-top: 37px;
  margin-bottom: 28px;
  font-weight: 600;
  font-size: 24px;
}

.equipment {
  line-height: 148%;
  font-weight: 400;
  font-size: 18px;
}

hr {
  margin: 17px 0px;
}

span {
  font-size: 16px;
  line-height: 148%;
}

img {
  width: 301px;
  height: 208px;
  object-fit: cover;
  border-radius: 12px;
}
</style>