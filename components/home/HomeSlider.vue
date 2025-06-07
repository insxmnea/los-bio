<template lang="pug">  
.swiper-container
  swiper(
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
.swiper-container {
  position: relative;
  height: 500px;
  width: 100%;
}

.slide-content {
  display: flex;
  height: 100%;
  align-items: center;
  padding: 0 10%;
  background: linear-gradient(90deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 100%);
}

.text-content {
  flex: 1;
  color: white;
  max-width: 50%;
}

.image-content {
  flex: 1;
  display: flex;
  justify-content: center;
}

img {
  max-height: 350px;
  max-width: 100%;
  object-fit: contain;
}

.slide-title {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.slide-description {
  font-size: 1.2rem;
  margin-bottom: 2rem;
}

.slide-button {
  display: inline-block;
  padding: 12px 30px;
  background-color: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 30px;
  font-weight: bold;
  transition: all 0.3s ease;

  &:hover {
    background-color: #0056b3;
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0,0,0,0.2);
  }
}

.swiper-pagination {
  position: absolute;
  bottom: 20px;
}

::v-deep .swiper-pagination-bullet {
  background-color: white;
  opacity: 0.5;
  width: 12px;
  height: 12px;
  margin: 0 8px;
}

::v-deep .swiper-pagination-bullet-active {
  opacity: 1;
  background-color: #007bff;
}
</style>