<template>
  <ClientOnly>
    <div ref="sectionRef" class="w-full bg-white">
      <div class="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h2
          ref="titleRef"
          class="text-2xl sm:text-3xl font-bold text-gray-800 mb-8 mt-8 text-center"
        >
          {{ $t('services.title') }}
        </h2>

        <div
          ref="gridRef"
          class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
        >
          <NuxtLink
            v-for="service in translatedServices.slice(0, 6)"
            :key="service.id"
            :to="`/service/${service.id}`"
            class="group block rounded-xl overflow-hidden border border-gray-200 hover:border-gray-400 transition-colors duration-200 h-[400px]"
          >
            <div class="h-[80%] bg-gray-100 overflow-hidden">
              <NuxtImg
                :src="getImageUrl(service?.images?.[0])"
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

        <div ref="btnRef" class="flex justify-center mt-12">
          <NuxtLink
            to="/services"
            class="group inline-flex items-center text-sm font-medium text-white bg-gray-800 hover:bg-gray-900 px-6 py-2 rounded-md transition-colors duration-300"
          >
            {{ $t('services.viewAll') }}
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
import { ref, computed } from 'vue'
import { useServiceStore } from '@/stores/services'
import { useI18n } from 'vue-i18n'


const serviceStore = useServiceStore()
const { locale } = useI18n()

const translatedServices = computed(() =>
  serviceStore.services.slice(0, 3).map((service) => ({
    ...service,
    name: service.name?.[locale.value] ?? service.name?.['en'] ?? 'No name',
  }))
)

const getImageUrl = (imgPath) => {
  return imgPath ? imgPath : '/default.jpg'
}

// GSAP va ScrollTrigger to'liq olib tashlandi
</script>
