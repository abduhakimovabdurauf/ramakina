<template>
  <section ref="sectionRef" class="px-4 sm:px-6 lg:px-8 py-16 mt-8">
    <div class="max-w-screen-xl mx-auto">
      <h2 ref="titleRef" class="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
        {{ $t('about.title') }}
      </h2>
      <p ref="descRef" class="text-gray-700 text-sm sm:text-base leading-relaxed">
        {{ $t('about.description') }}
      </p>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const sectionRef = ref(null)
const titleRef = ref(null)
const descRef = ref(null)

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger)

  gsap.from(titleRef.value, {
    scrollTrigger: {
      trigger: sectionRef.value,
      start: 'top 80%',
      toggleActions: 'play reset play reset'
    },
    y: 50,
    opacity: 0,
    duration: 1,
    ease: 'power2.out'
  })

  gsap.from(descRef.value, {
    scrollTrigger: {
      trigger: sectionRef.value,
      start: 'top 85%',
    toggleActions: 'play reset play reset'
    },
    y: 30,
    opacity: 0,
    duration: 1,
    delay: 0.3,
    ease: 'power2.out'
  })
})
</script>
