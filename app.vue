<template>
  <NuxtLayout>
    <NuxtPage></NuxtPage>
  </NuxtLayout>
</template>

<script setup>

// onMounted(()=> {
//   fetch('http://localhost/ramakina-admin/api/products.php')
//   .then(res => res.json())
//   .then(data => {
//     if (data.status === 'success') {
//       console.log(data.data);
//     }
//   });

// })


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