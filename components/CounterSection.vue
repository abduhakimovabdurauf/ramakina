<template>
  <section class="py-20">
    <div ref="sectionRef" class="max-w-screen-xl mx-auto px-4">
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
        <div
          v-for="(counter, index) in counters"
          :key="index"
          class="flex flex-col justify-center items-center"
        >
          <p class="text-5xl font-bold text-gray-900">
            {{ animatedValues[index] }}+
          </p>
          <p class="text-gray-700 text-base sm:text-lg mt-3 font-medium">
            {{ $t(`counters.${counter.label}`) }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const counters = [
  { label: 'experience', value: 30 },
  { label: 'projects', value: 1000 },
  { label: 'customers', value: 500 },
  { label: 'employees', value: 50 }
]

const animatedValues = ref(counters.map(() => 0))
const sectionRef = ref(null)
let hasAnimated = ref(false)

function animateValue(index, target, duration = 1500) {
  const startTime = performance.now()

  function update(currentTime) {
    const elapsed = currentTime - startTime
    const progress = Math.min(elapsed / duration, 1)
    animatedValues.value[index] = Math.floor(progress * target)
    if (progress < 1) requestAnimationFrame(update)
    else animatedValues.value[index] = target
  }

  animatedValues.value[index] = 0
  requestAnimationFrame(update)
}

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      const entry = entries[0]
      if (entry.isIntersecting) {
        // Reset va qayta animatsiya
        counters.forEach((counter, index) => {
          animateValue(index, counter.value)
        })
      } else {
        animatedValues.value = counters.map(() => 0)
      }
    },
    { threshold: 0.5 }
  )

  if (sectionRef.value) observer.observe(sectionRef.value)
})
</script>
