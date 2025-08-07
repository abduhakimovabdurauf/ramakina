<template>
  <ClientOnly>
    <div ref="sectionRef" class="w-full bg-white">
      <div class="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:px-8 mt-8">
        <h2
          ref="titleRef"
          class="text-2xl sm:text-3xl font-bold text-gray-800 mb-8 text-center"
        >
          {{ $t('products.title') }}
        </h2>

        <div ref="gridRef" class="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <NuxtLink
            v-for="product in limitedProducts"
            :key="product.id"
            :to="`/product/${product.id}`"
            class="group block rounded-xl overflow-hidden border border-gray-200 hover:border-gray-400 transition-colors duration-200 h-[400px]"
          >
            <div class="h-[80%] bg-gray-100 overflow-hidden">
              <NuxtImg
                :src="getImageSrc(product)"
                :alt="product.name"
                class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div
              class="h-[20%] flex items-center justify-center px-4 text-center bg-white"
            >
              <h3 class="text-lg font-medium text-gray-800 leading-tight">
                {{ product.name }}
              </h3>
            </div>
          </NuxtLink>
        </div>

        <div ref="btnRef" class="flex justify-center mt-12">
          <NuxtLink
            to="/products"
            class="group inline-flex items-center text-sm font-medium text-white bg-gray-800 hover:bg-gray-900 px-6 py-2 rounded-md transition-colors duration-300"
          >
            {{ $t('products.viewAll') }}
            <span
              class="ml-2 transform group-hover:translate-x-0 transition-all duration-300"
            >
              →
            </span>
          </NuxtLink>
        </div>
      </div>
    </div>
  </ClientOnly>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { useProductStore } from '@/stores/products'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()
const productStore = useProductStore()

const translatedProducts = computed(() =>
  productStore.products.map((product) => ({
    ...product,
    name: product.name[locale.value],
    description: product.description[locale.value]
  }))
)
const limitedProducts = computed(() => translatedProducts.value.slice(0, 6))

const getImageSrc = (product) => {
  return product.images?.[0]
    ? product.images[0]
    : '/default.jpg'
}

const sectionRef = ref(null)
const titleRef = ref(null)
const gridRef = ref(null)
const btnRef = ref(null)

</script>
