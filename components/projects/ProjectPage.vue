<template lang="pug">
.container(v-if="project")
  Breadcrumbs(:title="project.title")

  .project
    .project-info
      h1 {{ project.title }}
      .content(v-for="description in project.description.blocks" :key="description.id")
        h2(v-if="description.type === 'header'") {{ description.data.text }}
        p(v-if="description.type === 'paragraph'") {{ description.data.text }}
        ul(v-if="description.type === 'list'")
          li(v-for="item in description.data.items" :key="item") {{ item }}

    .images
      img.project-image(v-for="image in project.photos" :key="image.id" :src="getImageUrl(image.name)" :alt="project.title")
</template>

<script setup lang="ts">
import type { Project } from '~/types/project';
import Breadcrumbs from '../common/Breadcrumbs.vue';

const route = useRoute()
const { data }: any = await useFetch(
`https://api.los-bio.ru/projects/${route.params.slug}`
)

const project: Project = data.value

const getImageUrl = (image: string) => {
  return `https://api.los-bio.ru/files/projects/${image}`;
};
</script>

<style scoped lang="scss">
@use 'assets/scss/utils/_variables';

.container {
  margin: 0 auto;
  max-width: variables.$content-width;
}

.project {
  display: flex;
  justify-content: space-between;
  gap: 41px;
}

.images {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.project-info {
  background-color: rgba(18, 21, 35, 0.49);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 19px;
  padding: 30px 40px;
  width: 100%;
}

h1 {
  margin-bottom: 25px;
}

h2, p, ul, li {
  font-size: 18px;
}

h2, p, li {
  margin-bottom: 16px;
}

ul {
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  list-style-type: disc;

  li::marker {
    color: variables.$blue;
  }

  li {
    margin-bottom: 10px;
    white-space: pre-wrap;
  }
}

.project-image {
  width: 433px;
  height: 300px;
  object-fit: cover;
  border-radius: 19px;
}
</style>