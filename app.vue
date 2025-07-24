<template>
  <NuxtLayout>
    <NuxtPage></NuxtPage>
  </NuxtLayout>
</template>

<script setup>
import { useProductStore } from '@/stores/products.js';
import { useServiceStore } from '@/stores/services.js';

const productStore = useProductStore();
const serviceStore = useServiceStore();
onMounted(async () => {
  if (!productStore.products.length) {
    await productStore.fetchProducts()
  }

  if (!serviceStore.services.length) {
    await serviceStore.fetchServices()
  }
})




</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>