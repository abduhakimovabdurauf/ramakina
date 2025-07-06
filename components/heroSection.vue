<template>
  <section class="px-4 sm:px-6 lg:px-8">
    <div class="max-w-screen-xl mx-auto mt-12 relative rounded-lg overflow-hidden">
      <Swiper
        :modules="[Autoplay, Pagination]"
        :autoplay="{ delay: 5000 }"
        :loop="true"
        :pagination="{ clickable: true }"
        class="h-[400px] sm:h-[600px]"
        @slideChange="animateText"
        @swiper="onSwiper"
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
              <h1
                ref="titles"
                class="slide-title text-2xl sm:text-4xl font-bold max-w-xl leading-snug"
              >
                {{ $t(slide.title) }}
              </h1>
              <p
                ref="subtitles"
                class="slide-subtitle mt-3 text-sm sm:text-base max-w-xl"
              >
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
import { ref, onMounted, nextTick } from 'vue'
import { gsap } from 'gsap'

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

// refs to elements inside each slide
const titles = ref<HTMLElement[]>([])
const subtitles = ref<HTMLElement[]>([])

// Store swiper instance
const swiperInstance = ref()

const onSwiper = (swiper: any) => {
  swiperInstance.value = swiper
  nextTick(() => {
    animateText() // animatsiyani birinchi sahifada ko‘rsatish uchun
  })
}

// Animate slide content
const animateText = () => {
  const index = swiperInstance.value?.realIndex || 0

  const titleEl = titles.value[index]
  const subtitleEl = subtitles.value[index]

  if (titleEl && subtitleEl) {
    gsap.fromTo(
      titleEl,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1,delay: 0.2, ease: 'power3.out',toggleActions: 'play reset play reset' }
    )

    gsap.fromTo(
      subtitleEl,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 0.5, ease: 'power2.out',toggleActions: 'play reset play reset' }
    )
  }
}
</script>
