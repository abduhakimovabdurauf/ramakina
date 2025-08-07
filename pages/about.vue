<template>
  <div class="max-w-4xl mx-auto px-4 py-16" ref="sectionRef">
    <h1 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 text-center">
      {{ t('aboutPage.title') }}
    </h1>

    <div class="space-y-6 text-gray-700 text-base sm:text-lg leading-relaxed">
      <p
        v-for="(p, i) in paragraphs"
        :key="i"
        ref="setParagraphRef"
      >
        {{ t(p) }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { onMounted, ref } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useHead } from '#imports'

const { t, locale } = useI18n()
gsap.registerPlugin(ScrollTrigger)

// ScrollTrigger uchun section
const sectionRef = ref(null)

// Paragraph DOM elementlarini to‘plash uchun
const paragraphRefs = ref([])

const setParagraphRef = el => {
  if (el && !paragraphRefs.value.includes(el)) {
    paragraphRefs.value.push(el)
  }
}

onMounted(() => {
  gsap.from(paragraphRefs.value, {
    opacity: 0,
    y: 30,
    stagger: 0.2,
    duration: 1,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: sectionRef.value,
      start: 'top 80%',
      toggleActions: 'play none none reset' // animatsiyani har safar ko‘rinsa, qayta ishga tushuradi
    },
  })
})

const paragraphs = [
  'aboutPage.p1',
  'aboutPage.p2',
  'aboutPage.p3',
  'aboutPage.p4',
  'aboutPage.p5',
  'aboutPage.p6'
]

const metaData = {
  uz: {
    title: 'Biz haqimizda - WellEnergy',
    description: 'WellEnergy 30 yildan ortiq tajribaga ega. Biz sanoat uskunalari ishlab chiqaramiz va xalqaro mijozlarimizga yechimlar taqdim etamiz.'
  },
  ru: {
    title: 'О нас - WellEnergy',
    description: 'WellEnergy имеет более 30 лет опыта. Мы производим промышленное оборудование и предоставляем решения международным клиентам.'
  },
  en: {
    title: 'About Us - WellEnergy',
    description: 'WellEnergy has over 30 years of experience. We produce industrial machines and provide solutions for international clients.'
  },
  tr: {
    title: 'Hakkımızda - WellEnergy',
    description: 'WellEnergy 30 yılı aşkın deneyime sahiptir. Endüstriyel makineler üretiyor ve uluslararası müşterilere çözümler sunuyoruz.'
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

    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: current.title },
    { name: 'twitter:description', content: current.description },
  ]
})
</script>
