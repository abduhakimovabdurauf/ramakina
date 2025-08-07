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
    title: 'WellEnergy - Sifatli sanoat uskunalari ishlab chiqaruvchisi',
    description: '30 yillik tajribaga ega WellEnergy kompaniyasi sanoat uskunalari, qozonlar, aritma tizimlari va boshqa maxsus yechimlar ishlab chiqaradi.'
  },
  ru: {
    title: 'WellEnergy - Производитель качественного промышленного оборудования',
    description: 'WellEnergy с 30-летним опытом производит котлы, системы очистки и промышленные решения высокого качества.'
  },
  en: {
    title: 'WellEnergy - High-Quality Industrial Equipment Manufacturer',
    description: 'With over 30 years of experience, WellEnergy produces boilers, refining systems, and customized industrial solutions.'
  },
  tr: {
    title: 'WellEnergy - Kaliteli Endüstriyel Ekipman Üreticisi',
    description: '30 yılı aşkın tecrübesiyle WellEnergy, kazanlar, arıtma sistemleri ve özel sanayi çözümleri üretmektedir.'
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

