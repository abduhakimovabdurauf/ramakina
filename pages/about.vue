<template>
  <div class="max-w-4xl mx-auto px-4 py-16">
    <h1 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 text-center">
      {{ t('aboutPage.title') }}
    </h1>

    <div class="space-y-6 text-gray-700 text-base sm:text-lg leading-relaxed">
      <p>{{ t('aboutPage.p1') }}</p>
      <p>{{ t('aboutPage.p2') }}</p>
      <p>{{ t('aboutPage.p3') }}</p>
      <p>{{ t('aboutPage.p4') }}</p>
      <p>{{ t('aboutPage.p5') }}</p>
      <p>{{ t('aboutPage.p6') }}</p>
    </div>
  </div>
</template>


<script setup>
import { useI18n } from 'vue-i18n'
const { t,locale } = useI18n()

import { useHead } from '#imports'

const metaData = {
  uz: {
    title: 'Biz haqimizda - RA Makina',
    description: 'RA Makina 30 yildan ortiq tajribaga ega. Biz sanoat uskunalari ishlab chiqaramiz va xalqaro mijozlarimizga yechimlar taqdim etamiz.'
  },
  ru: {
    title: 'О нас - RA Makina',
    description: 'RA Makina имеет более 30 лет опыта. Мы производим промышленное оборудование и предоставляем решения международным клиентам.'
  },
  en: {
    title: 'About Us - RA Makina',
    description: 'RA Makina has over 30 years of experience. We produce industrial machines and provide solutions for international clients.'
  },
  tr: {
    title: 'Hakkımızda - RA Makina',
    description: 'RA Makina 30 yılı aşkın deneyime sahiptir. Endüstriyel makineler üretiyor ve uluslararası müşterilere çözümler sunuyoruz.'
  }
}

const current = metaData[locale.value]

useHead({
  title: current.title,
  meta: [
    { name: 'description', content: current.description },
    { property: 'og:title', content: current.title },
    { property: 'og:description', content: current.description },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://example.com/about' },
    { property: 'og:image', content: 'https://example.com/og-image.jpg' },

    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: current.title },
    { name: 'twitter:description', content: current.description },
    { name: 'twitter:image', content: 'https://example.com/og-image.jpg' }
  ]
})

</script>
