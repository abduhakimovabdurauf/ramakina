<template>
  <section ref="sectionRef" class="py-20 px-3 md:px-0">
    <div class="max-w-screen-xl mx-auto px-4 flex flex-col md:flex-row gap-10">
      <!-- Chap taraf -->
      <div ref="leftRef" class="md:w-1/2 opacity-0 translate-y-10">
        <h2 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
          {{ $t('contact.title') }}
        </h2>
        <p class="text-gray-600 mb-4">
          {{ $t('contact.description') }}
        </p>

        <ul class="text-gray-700 space-y-2">
          <li><strong>{{ $t('contact.address') }}:</strong> Gaziantep, Turkiya</li>
          <li><strong>{{ $t('contact.email') }}:</strong> info@ramakina.com</li>
          <li><strong>{{ $t('contact.phone') }}:</strong> +90 123 456 78 90</li>
        </ul>
      </div>

      <!-- Forma -->
      <div ref="formRef" class="md:w-1/2 opacity-0 translate-y-10">
        <form @submit.prevent="handleSubmit" class="space-y-5">
          <input
            type="text"
            v-model="form.fullName"
            :placeholder="$t('contact.fullName')"
            required
            class="w-full border border-gray-300 px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-black"
          />
          <input
            type="email"
            v-model="form.email"
            :placeholder="$t('contact.email')"
            required
            class="w-full border border-gray-300 px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-black"
          />
          <textarea
            v-model="form.message"
            :placeholder="$t('contact.message')"
            required
            rows="5"
            class="w-full border border-gray-300 px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-black resize-none"
          ></textarea>
          <button
            type="submit"
            class="bg-black hover:bg-gray-800 text-white py-3 px-6 rounded transition w-full"
          >
            {{ $t('contact.send') }}
          </button>
        </form>
      </div>
    </div>
    <Toast v-if="toast.show" :message="toast.message" :type="toast.type" />
  </section>
</template>

<script setup>
import { ref, reactive, onMounted, nextTick } from 'vue'
import Toast from '@/components/ui/Toast.vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const toast = reactive({
  show: false,
  message: '',
  type: 'success'
})

function showToast(message, type = 'success') {
  toast.message = message
  toast.type = type
  toast.show = true

  setTimeout(() => {
    toast.show = false
  }, 3000)
}

const form = ref({
  fullName: '',
  email: '',
  message: ''
})

const handleSubmit = async () => {
  const message = `
📥 Bog'lanish so'ro'vi!

👤 Ism: ${form.value.fullName}
📧 Email: ${form.value.email}
💬 Xabar: ${form.value.message}
`

  const { error } = await useFetch('/api/telegram', {
    method: 'POST',
    body: { text: message }
  })

  if (error.value) {
    showToast('Xabar yuborilmadi.', 'error')
  } else {
    showToast('Xabar yuborildi!', 'success')
    form.value.fullName = ''
    form.value.email = ''
    form.value.message = ''
  }
}

// Animatsiya uchun ref'lar
const sectionRef = ref(null)
const leftRef = ref(null)
const formRef = ref(null)

onMounted(async () => {
  await nextTick()
  gsap.registerPlugin(ScrollTrigger)

  // Chap taraf animatsiyasi
  gsap.to(leftRef.value, {
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: sectionRef.value,
      start: 'top 85%',
      toggleActions: 'play reset play reset'
    }
  })

  // Forma animatsiyasi
  gsap.to(formRef.value, {
    opacity: 1,
    y: 0,
    duration: 0.8,
    delay: 0.2,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: sectionRef.value,
      start: 'top 85%',
      toggleActions: 'play reset play reset'
    }
  })
})
</script>
