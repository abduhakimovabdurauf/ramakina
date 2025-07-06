<template>
  <ClientOnly>
    <div ref="sectionRef" class="w-full bg-white">
      <div class="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:px-8 mt-8">
        <h2 ref="titleRef" class="text-2xl sm:text-3xl font-bold text-gray-800 mb-8 text-center">
          {{ $t('products.title') }}
        </h2>

        <div ref="gridRef" class="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <NuxtLink
            v-for="(product, index) in translatedProducts.slice(0, 6)"
            :key="product.id"
            :to="`/product/${product.id}`"
            class="group block rounded-xl overflow-hidden border border-gray-200 hover:border-gray-400 transition-colors duration-200 h-[400px] opacity-0"
          >
            <div class="h-[80%] bg-gray-100 overflow-hidden">
              <NuxtImg
                :src="product.imagePath[0]"
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

        <div ref="btnRef" class="flex justify-center mt-12 opacity-0">
          <NuxtLink
            to="/products"
            class="group inline-flex items-center text-sm font-medium text-white bg-gray-800 hover:bg-gray-900 px-6 py-2 rounded-md transition-colors duration-300"
          >
            {{ $t('products.viewAll') }}
            <span
              class="ml-2 transform opacity-0 translate-x-[-4px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
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
import { ref, onMounted, nextTick } from 'vue'
import { useProductStore } from '@/stores/products'
import { useI18n } from 'vue-i18n'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const { locale } = useI18n()
const productStore = useProductStore()

const translatedProducts = computed(() =>
  productStore.products.map((product) => ({
    ...product,
    name: product.name[locale.value],
    description: product.description[locale.value]
  }))
)

const sectionRef = ref(null)
const titleRef = ref(null)
const gridRef = ref(null)
const btnRef = ref(null)

onMounted(async () => {
  gsap.registerPlugin(ScrollTrigger)

  await nextTick()

  gsap.fromTo(titleRef.value,
    { opacity: 0, y: 40 },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: sectionRef.value,
        start: 'top 80%',
        toggleActions: 'play reset play reset'
      }
    })
  gsap.utils.toArray(gridRef.value.children).forEach((card, i) => {
    gsap.fromTo(card,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        delay: i * 0.1,
        duration: 0.6,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: card,
          start: 'top 90%',
          toggleActions: 'play reset play reset'
        }
      }
    )
  })

  // Button animatsiyasi
  gsap.fromTo(btnRef.value,
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      y: 0,
      duration: 0.7,
      delay: 0.2,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: btnRef.value,
        start: 'top 90%',
        toggleActions: 'play reset play reset'
      }
    })
})
</script>
