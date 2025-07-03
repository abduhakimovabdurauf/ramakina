<template>
  <Transition name="fade">
    <div
      v-if="visible"
      :class="[
        'fixed top-6 right-6 px-6 py-3 rounded-md text-white shadow-lg z-[1000]',
        type === 'success' ? 'bg-green-600' : 'bg-red-600'
      ]"
    >
      {{ message }}
    </div>
  </Transition>
</template>

<script setup>
const props = defineProps({
  message: String,
  type: {
    type: String,
    default: 'success'
  },
  duration: {
    type: Number,
    default: 3000
  }
})

const visible = ref(true)

onMounted(() => {
  setTimeout(() => {
    visible.value = false
  }, props.duration)
})
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
