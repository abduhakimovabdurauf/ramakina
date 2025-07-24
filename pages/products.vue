<template>
  <ClientOnly>
    <div class="w-full">
      <div class="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:px-8 mt-8">
        <h2 class="text-2xl sm:text-3xl font-bold text-gray-800 mb-8 text-center">
          {{ $t('products.title') }}
        </h2>

        <div v-if="translatedProducts.length" class="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <NuxtLink
            v-for="product in translatedProducts"
            :key="product.id"
            :to="`/product/${product.id}`"
            class="group block rounded-xl overflow-hidden border border-gray-200 hover:border-gray-400 transition-colors duration-200 h-[400px]"
          >
            <div class="h-[80%] bg-gray-100 overflow-hidden">
              <NuxtImg
                :src="CpanelLink + product.images?.[0] || '/default.jpg'"
                :alt="product.name"
                class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            <div class="h-[20%] flex items-center justify-center px-4 text-center bg-white">
              <h3 class="text-lg font-medium text-gray-800 leading-tight">
                {{ product.name }}
              </h3>
            </div>
          </NuxtLink>
        </div>

        <div v-else class="text-center text-gray-500">
          {{ $t('products.loading') }}
        </div>
      </div>
    </div>
  </ClientOnly>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { useHead } from '#imports'
import { useProductStore } from '@/stores/products'
import { computed, onMounted } from 'vue'
const config = useRuntimeConfig()
const CpanelLink = config.public.CPANEL_LINK

const { locale } = useI18n()
const productStore = useProductStore()

const translatedProducts = computed(() =>
  (productStore.products || []).map((product) => ({
    ...product,
    name: product.name?.[locale.value] || '',
    description: product.description?.[locale.value] || ''
  }))
)

const metaData = {
  uz: {
    title: 'Mahsulotlar - RA Makina sanoat uskunalari',
    description: 'RA Makina tomonidan ishlab chiqarilgan qayta ishlash tizimlari, qozonlar, tanklar va boshqa sanoat uskunalari bilan tanishing.'
  },
  ru: {
    title: 'Продукты - Промышленное оборудование RA Makina',
    description: 'Ознакомьтесь с промышленным оборудованием от RA Makina: системы переработки, котлы, резервуары и многое другое.'
  },
  en: {
    title: 'Products - RA Makina Industrial Equipment',
    description: 'Discover industrial solutions by RA Makina including recycling systems, boilers, tanks, and more.'
  },
  tr: {
    title: 'Ürünler - RA Makina Endüstriyel Ekipmanlar',
    description: 'RA Makina tarafından üretilen geri dönüşüm sistemleri, kazanlar, tanklar ve diğer endüstriyel ekipmanları keşfedin.'
  }
}

const current = computed(() => metaData[locale.value])

useHead(() => ({
  title: current.value.title,
  meta: [
    { name: 'description', content: current.value.description },
    { property: 'og:title', content: current.value.title },
    { property: 'og:description', content: current.value.description },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://example.com/products' },
    { property: 'og:image', content: 'https://example.com/og-products.jpg' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: current.value.title },
    { name: 'twitter:description', content: current.value.description },
    { name: 'twitter:image', content: 'https://example.com/og-products.jpg' }
  ]
}))
</script>
