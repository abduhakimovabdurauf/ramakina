<template>
  <section class="px-4 sm:px-6 lg:px-8">
    <div class="max-w-screen-xl mx-auto mt-12 relative rounded-lg overflow-hidden">
      <Swiper
        :modules="[Autoplay, Pagination]"
        :autoplay="{ delay: 5000 }"
        :loop="true"
        :pagination="{ clickable: true }"
        class="h-[400px] sm:h-[600px]"
      >
        <SwiperSlide v-for="slide in slides" :key="slide.id">
          <div class="relative w-full h-full">
            <NuxtImg
              :src="slide.image"
              class="w-full h-full object-cover"
              :alt="slide.alt"
            />

            <div
              class="absolute inset-0 flex flex-col justify-center px-4 sm:px-12 lg:px-20 py-6 bg-gradient-to-r from-black/70 to-black/50 text-white"
            >
              <h1 class="text-2xl sm:text-4xl font-bold max-w-xl leading-snug">
                {{ $t(slide.title) }}
              </h1>
              <p class="mt-3 text-sm sm:text-base max-w-xl">
                {{ $t(slide.subtitle) }}
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'

const slides = [
  {
    id: 1,
    image: '/hero.jpg',
    alt: 'Hero Image 1',
    title: 'hero.title',
    subtitle: 'hero.subtitle'
  },
  {
    id: 2,
    image: '/hero2.jpg',
    alt: 'Hero Image 2',
    title: 'hero2.title',
    subtitle: 'hero2.subtitle'
  }
]
</script>
