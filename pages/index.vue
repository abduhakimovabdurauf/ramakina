<template>
    <HeroSection/>
    <AboutSection/>
    <productSection/>
    <servicesSection/>
    <VideoSection/>
    <CounterSection/>
    <ContactSection/>
</template>

<script setup>
import { useHead } from '#imports'

const { locale } = useI18n()

const metaData = {
  uz: {
    title: 'RA Makina - Sifatli sanoat uskunalari ishlab chiqaruvchisi',
    description: '30 yillik tajribaga ega RA Makina kompaniyasi sanoat uskunalari, qozonlar, aritma tizimlari va boshqa maxsus yechimlar ishlab chiqaradi.'
  },
  ru: {
    title: 'RA Makina - Производитель качественного промышленного оборудования',
    description: 'RA Makina с 30-летним опытом производит котлы, системы очистки и промышленные решения высокого качества.'
  },
  en: {
    title: 'RA Makina - High-Quality Industrial Equipment Manufacturer',
    description: 'With over 30 years of experience, RA Makina produces boilers, refining systems, and customized industrial solutions.'
  },
  tr: {
    title: 'RA Makina - Kaliteli Endüstriyel Ekipman Üreticisi',
    description: '30 yılı aşkın tecrübesiyle RA Makina, kazanlar, arıtma sistemleri ve özel sanayi çözümleri üretmektedir.'
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

