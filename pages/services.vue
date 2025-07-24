<template>
  <ClientOnly>
    <div class="w-full">
      <div class="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h2 class="text-2xl sm:text-3xl font-bold text-gray-800 mb-8 mt-8 text-center">
          {{ $t('services.title') }}
        </h2>

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <NuxtLink
            v-for="service in translatedServices"
            :key="service.id"
            :to="`/service/${service.id}`"
            class="group block rounded-xl overflow-hidden border border-gray-200 hover:border-gray-400 transition-colors duration-200 h-[400px]"
          >
            <div class="h-[80%] bg-gray-100 overflow-hidden">
              <NuxtImg
                :src="CpanelLink + service.images[0]"
                :alt="service.name"
                class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            <div class="h-[20%] flex items-center justify-center px-4 text-center bg-white">
              <h3 class="text-lg font-medium text-gray-800 leading-tight">
                {{ service.name }}
              </h3>
            </div>
          </NuxtLink>

        </div>
      </div>
    </div>
    
  </ClientOnly>
</template>

<script setup>
import { useServiceStore } from '@/stores/services'
import { useHead } from '#imports'
const serviceStore = useServiceStore()
const { locale } = useI18n()
const config = useRuntimeConfig()
const CpanelLink = config.public.CPANEL_LINK
console.log('SSR:', import.meta.server, CpanelLink)
console.log('Client:', import.meta.client, CpanelLink)

const translatedServices = computed(() =>
  serviceStore.services.map((service) => ({
    ...service,
    name: service.name[locale.value],
  }))
)


const metaData = {
  uz: {
    title: 'Xizmatlar - RA Makina sanoat yechimlari',
    description: 'RA Makina tomonidan taklif etiladigan xizmatlar: tekstil, neft, logistika, oziq-ovqat, transport, yogʻ sanoati va boshqa sohalar uchun moslashtirilgan sanoat yechimlari.'
  },
  ru: {
    title: 'Услуги - Промышленные решения RA Makina',
    description: 'Услуги от RA Makina: решения для текстиля, нефти, логистики, пищевой промышленности, транспорта и других отраслей.'
  },
  en: {
    title: 'Services - RA Makina Industrial Solutions',
    description: 'Explore RA Makina services for industries like textile, oil, logistics, food, transportation, lubrication, and more.'
  },
  tr: {
    title: 'Hizmetler - RA Makina Endüstriyel Çözümler',
    description: 'RA Makina hizmetleri: tekstil, petrol, lojistik, gıda, ulaşım, yağ ve diğer sektörlere özel çözümler.'
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
    { property: 'og:url', content: 'https://example.com/services' }, // Domenni to'g'rilang
    { property: 'og:image', content: 'https://example.com/og-services.jpg' },

    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: current.title },
    { name: 'twitter:description', content: current.description },
    { name: 'twitter:image', content: 'https://example.com/og-services.jpg' }
  ]
})

</script>
