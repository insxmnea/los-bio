<template lang="pug">
.container(v-if="project")
  Breadcrumbs(:title="project.title")

  .project-info
    h1 {{ project.title }}
    .content(v-for="description in project.description.blocks" :key="description.id")
      h2(v-if="description.type === 'header'") {{ description.data.text }}
      p(v-if="description.type === 'paragraph'") {{ description.data.text }}
      ul(v-if="description.type === 'list'")
        li(v-for="item in description.data.items" :key="item") {{ item }}
</template>

<script setup lang="ts">
import type { Project } from '~/types/project';
import Breadcrumbs from '../common/Breadcrumbs.vue';

const route = useRoute()
const { data }: any = await useFetch(
`https://api.los-bio.ru/projects/${route.params.slug}`
)

const project: Project = data.value
</script>

<style scoped lang="scss">
@use 'assets/scss/utils/_variables';

.container {
  margin: 0 auto;
  max-width: variables.$content-width;
}

.project-info {
  background-color: rgba(18, 21, 35, 0.49);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 19px;
  padding: 30px 40px;
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
</style>