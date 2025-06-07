<template lang="pug">
  Header
  div.project-page(v-if="project")
    .container
      h1 {{ project.title }}
      .content(v-html="project.description")
  Footer
</template>
  
<script setup lang="ts">
import Footer from '~/components/layouts/Footer.vue';
import Header from '~/components/layouts/Header.vue';
import type { Project } from '~/types/project';

// import type { Project } from '~/types'

const route = useRoute()
const { data }: any = await useFetch(
`https://api.los-bio.ru/projects/${route.params.slug}`
)

const project: Project = data.value
</script>