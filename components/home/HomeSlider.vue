<template lang="pug">  
.swiper-container
  swiper(
    :modules="[Pagination, Autoplay]"
    :pagination="{ clickable: true }"
    :autoplay="{ delay: 5000, disableOnInteraction: false }"
    :loop="true"
    :grabCursor="true"
    :speed="800"
  )
    swiper-slide(v-for="slide in slides" :key="slide.id")
      .slide-content
        .text-content
          h2.slide-title {{ slide.title }}
          p.slide-description {{ slide.description }}
          NuxtLink.slide-button(:to="slide.link") {{ slide.btnText }}
        .image-content(v-if="slide.image.length > 0")
          img(:src="getImageUrl(slide.image[0])" :alt="slide.title")

  .swiper-pagination
</template>
  
<script setup lang="ts">
import type { SlideImage, Slides } from '~/types/slide';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const { data, pending, error, refresh }: any = await useFetch(
  'https://api.los-bio.ru/info/group/slide'
)

const slides: Slides = [];

for (let i = 0; i < data.value.length; i++) {
  slides.push(JSON.parse(data.value[i].value as string));
}

const getImageUrl = (image: SlideImage) => {
  return `https://api.los-bio.ru/files/certificates/${image.name}`;
};
</script>
  
<style scoped lang="scss">
@use 'assets/scss/utils/_variables';

.swiper-container {
  position: relative;
  width: 100%;
  margin-top: 80px;
}

.slide-content {
  max-width: variables.$content-width;
  display: flex;
  height: 100%;
  align-items: center;
  padding: 0 10%;
  box-sizing: content-box;
}

.text-content {
  flex: 1;
  color: variables.$white;
  max-width: 50%;
}

.image-content {
  flex: 1;
  display: flex;
  justify-content: center;
}

img {
  max-width: 100%;
  object-fit: contain;
}

.slide-title {
  font-size: 60px;
  font-weight: 700;
}

.slide-description {
  margin: 30px 0px;
  font-size: 20px;
  line-height: 150%;
  font-weight: 400;
  width: 423px;
}

.slide-button {
  display: inline-block;
  padding: 16px 40px;
  background-color: variables.$blue;
  color: variables.$white;
  text-decoration: none;
  border-radius: 12px;
  font-weight: bold;
  transition: all 0.1s ease;
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 40px;

  &:hover {
    background-color: variables.$blue-hover;
  }
}

::v-deep .swiper-pagination-bullet {
  background-color: variables.$white;
  opacity: 0.05;
  width: 12px;
  height: 12px;
  margin: 0 8px;
}

::v-deep .swiper-pagination-bullet-active {
  opacity: 1;
  background-color: variables.$blue;
}
</style>