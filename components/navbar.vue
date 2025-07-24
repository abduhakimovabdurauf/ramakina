<template>
  <nav ref="navRef" class="bg-gray-50 border-b border-gray-200 relative z-50">
    <div class="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16 md:h-20">
        <NuxtLink to="/" class="flex items-center gap-2">
          <NuxtImg src="/logo.svg" alt="EcoBoiler Logo" width="24" height="24" />
          <span class="font-semibold text-lg md:text-xl text-gray-900">WellEnergy</span>
        </NuxtLink>

        <div class="hidden lg:flex items-center gap-6">
          <NuxtLink
            v-for="item in menu"
            :key="item.path"
            :to="item.path"
            class="text-sm md:text-base text-gray-800 hover:text-primary transition"
          >
            {{ $t(item.label) }}
          </NuxtLink>
        </div>

        <div class="flex items-center gap-2">
          <NuxtLink
            to="/contact"
            class="px-4 py-2 text-sm md:text-base font-semibold bg-gray-200 hover:bg-gray-300 text-gray-900 rounded-md transition hidden md:inline-block"
          >
            {{ $t('navbar.contact') }}
          </NuxtLink>
          <select
            v-model="localeModel"
            @change="setLocale(localeModel)"
            class="p-2 rounded-md border text-sm md:text-base bg-white uppercase"
          >
            <option v-for="loc in locales" :key="loc" :value="loc">
              {{ languageNames[loc] }}
            </option>
          </select>

          <button
            @click="isOpen = true"
            class="lg:hidden p-2 rounded-md hover:bg-gray-200 transition"
          >
            ☰
          </button>
        </div>
      </div>
    </div>

    <!-- Overlay -->
    <div
      v-if="isOpen"
      @click="isOpen = false"
      class="fixed inset-0 bg-black opacity-60 z-40"
    />

    <div
      v-if="isOpen"
      ref="menuRef"
      class="fixed top-0 right-0 w-64 h-screen bg-white shadow-lg z-50 p-6 flex flex-col gap-4"
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
  </nav>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { gsap } from 'gsap'
import { useI18n } from 'vue-i18n'

const isOpen = ref(false)
const navRef = ref(null)
const menuRef = ref(null)

// i18n
const { locale, setLocale } = useI18n()
const locales = ['en', 'ru', 'tr', 'uz']
const localeModel = ref(locale.value)

watch(localeModel, (newLocale) => {
  setLocale(newLocale)
})

// optional: til nomlarini ko‘rsatish
const languageNames = {
  en: 'English',
  ru: 'Русский',
  tr: 'Türkçe',
  uz: "O'zbekcha"
}

// menu
const menu = [
  { path: '/about', label: 'navbar.about' },
  { path: '/products', label: 'navbar.products' },
  { path: '/services', label: 'navbar.services' },
  { path: '/visionmission', label: 'navbar.vision' },
]

// animatsiyalar
onMounted(() => {
  gsap.from(navRef.value, {
    y: -60,
    opacity: 0,
    duration: 0.8,
    ease: 'power3.out'
  })
})
watch(isOpen, (val) => {
  if (val && menuRef.value) {
    gsap.fromTo(menuRef.value,
      { x: 300, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.5, ease: 'power2.out' }
    )
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
})
</script>
