<template lang="pug">
  section.container.projects
    h2 Проекты
    .grid
      NuxtLink.card(v-for="(p, i) in projects" :key="i" :to="`/projects/${p.slug}`")
        img(:src="getImageUrl(p.photos[0].name)" alt="Проект")
        h3 {{ p.title }}
        p {{ p.equipment }}
        hr
        small Тип работ: {{ p.works }}
        hr
        small Заказчик: {{ p.customer }}
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
h3 {
  font-weight: 600;
  font-size: 24px;
}

.projects {
  margin-top: 20px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(376px, 1fr));
  gap: 20px;
  margin-top: 20px;
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

img {
  width: 301px;
  height: 208px;
  object-fit: cover;
  border-radius: 12px;
}
</style>