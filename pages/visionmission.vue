<template>
  <div class="max-w-5xl mx-auto px-4 py-16">
    <h1 class="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12">
      {{ $t('visionMission.title') }}
    </h1>

    <section class="mb-12">
      <h2 class="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">
        {{ $t('visionMission.missionTitle') }}
      </h2>
      <p class="text-gray-700 text-base sm:text-lg leading-relaxed">
        {{ $t('visionMission.missionText') }}
      </p>
    </section>

    <section>
      <h2 class="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">
        {{ $t('visionMission.visionTitle') }}
      </h2>
      <p class="text-gray-700 text-base sm:text-lg leading-relaxed">
        {{ $t('visionMission.visionText') }}
      </p>
    </section>
  </div>
</template>

<script setup>
import { useHead } from '#imports'
const { locale } = useI18n()

const metaData = {
  uz: {
    title: 'Vizyon & Missiya - RA Makina',
    description: 'Bizning missiyamiz – ekologik toza, ishonchli va yuqori sifatli sanoat mahsulotlari yetkazib berish. Vizyonimiz – texnologik yangiliklar bilan yetakchilik qilish va barqaror rivojlanishni ta’minlash.'
  },
  ru: {
    title: 'Видение и миссия - RA Makina',
    description: 'Наша миссия — предоставлять экологически чистые, надежные и высокоэффективные промышленные продукты. Наше видение — быть лидером и поддерживать устойчивое развитие.'
  },
  en: {
    title: 'Vision & Mission - RA Makina',
    description: 'Our mission is to deliver eco-friendly, reliable, and high-performance industrial products. Our vision is to lead through innovation and ensure sustainable development.'
  },
  tr: {
    title: 'Vizyon & Misyon - RA Makina',
    description: 'Misyonumuz, çevre dostu, güvenilir ve yüksek performanslı endüstriyel ürünler sunmaktır. Vizyonumuz, yeniliklerle lider olmak ve sürdürülebilir büyümeyi sağlamaktır.'
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
    { property: 'og:url', content: 'https://example.com/vizyon-misyon' },
    { property: 'og:image', content: 'https://example.com/og-vizyon.jpg' },

    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: current.title },
    { name: 'twitter:description', content: current.description },
    { name: 'twitter:image', content: 'https://example.com/og-vizyon.jpg' }
  ]
})
</script>
