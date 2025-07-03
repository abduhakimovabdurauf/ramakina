<template>
  <nav class="bg-gray-50 border-b border-gray-200 relative z-50">
    <div class="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <NuxtLink to="/" class="flex items-center gap-2">
          <NuxtImg src="/logo.svg" alt="EcoBoiler Logo" width="24" height="24" />
          <span class="font-semibold text-lg text-gray-900">EcoBoiler Solutions</span>
        </NuxtLink>

        <div class="hidden lg:flex items-center gap-6">
          <NuxtLink
            v-for="item in menu"
            :key="item.path"
            :to="item.path"
            class="text-sm text-gray-800 hover:text-primary transition"
          >
            {{ $t(item.label) }}
          </NuxtLink>
        </div>
        <div class="flex items-center gap-2">
          <NuxtLink
            to="/contact"
            class="px-4 py-2 text-sm font-semibold bg-gray-200 hover:bg-gray-300 text-gray-900 rounded-md transition hidden md:inline-block"
          >
            {{ $t('navbar.contact') }}
          </NuxtLink>
          <button
            @click="switchLocale"
            class="p-2 rounded-md hover:bg-gray-200 uppercase transition"
          >
            🌐 {{ locale }}
          </button>

          <button
            @click="isOpen = true"
            class="lg:hidden p-2 rounded-md hover:bg-gray-200 transition"
          >
            ☰
          </button>
        </div>
      </div>
    </div>

    <transition name="fade">
      <div
        v-if="isOpen"
        @click="isOpen = false"
        class="fixed inset-0 bg-black opacity-60 z-40"
      />
    </transition>

    <transition name="slide">
      <div
        v-if="isOpen"
        class="fixed top-0 right-0 w-64 h-full bg-white shadow-lg z-50 p-6 flex flex-col gap-4"
      >
        <div class="flex justify-between items-center mb-4">
          <span class="text-lg font-semibold text-gray-800">Menu</span>
          <button @click="isOpen = false" class="text-2xl leading-none">&times;</button>
        </div>

        <NuxtLink
          v-for="item in menu"
          :key="item.path"
          :to="item.path"
          @click="isOpen = false"
          class="text-gray-800 hover:text-primary transition text-base"
        >
          {{ $t(item.label) }}
        </NuxtLink>

        <NuxtLink
          to="/contact"
          @click="isOpen = false"
          class="mt-4 px-4 py-2 bg-gray-200 hover:bg-gray-300 text-sm font-semibold text-gray-900 rounded-md transition"
        >
          {{ $t('navbar.contact') }}
        </NuxtLink>
      </div>
    </transition>
  </nav>
</template>

<script setup>
const isOpen = ref(false)

const { locale, setLocale } = useI18n()
const locales = ['en', 'ru', 'tr', 'uz']

const switchLocale = () => {
  const currentIndex = locales.indexOf(locale.value)
  const nextLocale = locales[(currentIndex + 1) % locales.length]
  setLocale(nextLocale)
}

const menu = [
  { path: '/about', label: 'navbar.about' },
  { path: '/products', label: 'navbar.products' },
  { path: '/services', label: 'navbar.services' },
  { path: '/visionmission', label: 'navbar.vision' },
]
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}
.slide-enter-from {
  transform: translateX(100%);
}
.slide-leave-to {
  transform: translateX(100%);
}
</style>
