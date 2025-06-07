<template lang="pug">
  div.project-page(v-if="project")
    .container
      h1 {{ project.title }}
      .content(v-html="project.content")
  </template>
  
  <script setup lang="ts">
  // import type { Project } from '~/types'
  
  // const route = useRoute()
  // const project = await useApi<Project>(`/projects/${route.params.slug}`)
  </script>