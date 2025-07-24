<template>
  <h1 class="text-2xl max-w-[1170px] mt-6 mx-auto font-bold px-4">Video</h1>

  <section class="flex flex-col sm:flex-row items-center max-w-[1200px] mx-auto gap-6 p-4">
    <!-- Video 1 -->
    <video
      class="w-full sm:w-[300px] sm:h-[533px] rounded-lg shadow-md"
      controls
      autoplay
      loop
      muted
    >
      <source src="/videos/1.mp4" type="video/mp4" />
      Sizning brauzeringiz video formatini qo'llab-quvvatlamaydi.
    </video>

    <!-- Video 2 -->
    <video
      class="w-full sm:w-[300px] sm:h-[533px] rounded-lg shadow-md"
      controls
      autoplay
      loop
      muted
    >
      <source src="/videos/2.mp4" type="video/mp4" />
      Sizning brauzeringiz video formatini qo'llab-quvvatlamaydi.
    </video>
  </section>
</template>

<script>
export default {
  name: "VideosPage",
};
</script>
