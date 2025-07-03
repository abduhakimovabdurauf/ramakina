<template>
  <div class="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-3 gap-10">
    <!-- Left: Selected Service Info -->
    <Transition name="fade" mode="out-in">
      <div :key="activeService.name.uz" class="md:col-span-2 space-y-6">
        <NuxtImg
          :src="activeService.imagePath"
          class="w-full h-64 sm:h-80 object-cover rounded"
          :alt="activeService.name[locale]"
        />
        <div>
          <h1 class="text-2xl sm:text-3xl font-bold text-gray-900">
            {{ activeService.name[locale] }}
          </h1>
          <p class="text-gray-700 leading-relaxed text-base sm:text-lg">
            {{ activeService.description[locale] }}
          </p>
        </div>
      </div>
    </Transition>

    <!-- Right: Service Links -->
    <div class="space-y-3">
      <div
        v-for="service in services"
        :key="service.name.uz"
        @click="selectService(service)"
        :class="[
          'relative cursor-pointer p-3 pl-6 rounded border text-sm sm:text-base transition before:content-[\'\'] before:absolute before:top-1/2 before:-translate-y-1/2 before:-left-2 before:w-4 before:h-4 before:-rotate-45 before:bg-gray-800 before:transition-all',
          activeService.name.uz === service.name.uz
            ? 'bg-gray-800 text-white border-gray-700'
            : 'bg-white text-gray-800 hover:bg-gray-100 border-gray-300 before:hidden'
        ]"
      >
        {{ service.name[locale] }}
      </div>
    </div>
  </div>
</template>


<script setup>
import { useServiceStore } from '@/stores/services'
import { useI18n } from 'vue-i18n'

const serviceStore = useServiceStore()
const { locale } = useI18n()

const services = serviceStore.services
const activeService = ref(services[0])

function selectService(service) {
  activeService.value = service
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}
.fade-enter-from {
  opacity: 0;
  transform: translateY(10px);
}
.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
