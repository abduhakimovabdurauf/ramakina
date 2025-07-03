<template>
  <footer class="bg-gray-900 text-white text-sm py-6">
    <div class="max-w-screen-xl mx-auto px-4 text-center">
      © {{ year }} {{ $t('footer.rights') }}
    </div>
  </footer>
</template>

<script setup>
const year = new Date().getFullYear()
</script>
