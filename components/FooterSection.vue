<template>
  <footer ref="footerRef" class="bg-gray-900 text-white pt-16 pb-8 px-4">
    <div class="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
      <!-- Kompaniya haqida -->
      <div>
        <h3 class="text-lg font-semibold mb-4">RA Makina</h3>
        <p class="text-gray-400 text-sm leading-relaxed">
          {{ $t('footer.description') }}
        </p>
      </div>

      <!-- Tez havolalar -->
      <div>
        <h3 class="text-lg font-semibold mb-4">{{ $t('footer.links') }}</h3>
        <ul class="space-y-2 text-sm">
          <li><NuxtLink to="/" class="hover:text-primary transition">{{ $t('navbar.home') }}</NuxtLink></li>
          <li><NuxtLink to="/about" class="hover:text-primary transition">{{ $t('navbar.about') }}</NuxtLink></li>
          <li><NuxtLink to="/products" class="hover:text-primary transition">{{ $t('navbar.products') }}</NuxtLink></li>
          <li><NuxtLink to="/services" class="hover:text-primary transition">{{ $t('navbar.services') }}</NuxtLink></li>
        </ul>
      </div>

      <!-- Aloqa -->
      <div>
        <h3 class="text-lg font-semibold mb-4">{{ $t('footer.contact') }}</h3>
        <ul class="text-sm space-y-2 text-gray-400">
          <li><strong>{{ $t('contact.address') }}:</strong> Gaziantep, Turkiya</li>
          <li><strong>{{ $t('contact.email') }}:</strong> info@ramakina.com</li>
          <li><strong>{{ $t('contact.phone') }}:</strong> +90 123 456 78 90</li>
        </ul>
        <div class="flex gap-4 mt-4">
          <a href="#" class="hover:text-primary transition"><i class="bx bxl-facebook text-xl"></i></a>
          <a href="#" class="hover:text-primary transition"><i class="bx bxl-instagram text-xl"></i></a>
          <a href="#" class="hover:text-primary transition"><i class="bx bxl-linkedin text-xl"></i></a>
        </div>
      </div>
    </div>

    <div class="mt-10 text-center text-xs text-gray-500 border-t border-gray-700 pt-4">
      © {{ year }} {{ $t('footer.rights') }}
    </div>
  </footer>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const year = new Date().getFullYear()
const footerRef = ref(null)

onMounted(() => {
  gsap.from(footerRef.value, {
    opacity: 0,
    y: 40,
    duration: 1,
    scrollTrigger: {
      trigger: footerRef.value,
      start: 'top 90%',
      toggleActions: 'play none none none'
    }
  })
})
</script>

<style scoped>
/* Ixtiyoriy qo‘shimcha uslublar */
</style>
