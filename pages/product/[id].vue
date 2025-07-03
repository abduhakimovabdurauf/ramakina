<template>
  <div class="max-w-6xl mx-auto px-4 py-10">
    <div v-if="product" class="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
      
      <div>
        <Swiper
          :modules="[Navigation, Thumbs]"
          :thumbs="{ swiper: thumbsSwiper }"
          class="w-full h-[250px] xs:h-[300px] sm:h-[400px] rounded overflow-hidden"
        >
          <SwiperSlide
            v-for="(img, index) in product.imagePath"
            :key="index"
          >
            <NuxtImg
              :src="img"
              class="w-full h-full object-cover"
              :alt="product.name"
            />
          </SwiperSlide>
        </Swiper>

        <Swiper
          @swiper="onThumbsSwiper"
          :spaceBetween="10"
          :slidesPerView="2"
          :breakpoints="{
            435: { slidesPerView: 3 },
            640: { slidesPerView: 4 },
            768: { slidesPerView: 5 }
          }"
          class="mt-4"
        >
          <SwiperSlide
            v-for="(img, index) in product.imagePath"
            :key="'thumb' + index"
            class="cursor-pointer"
          >
            <NuxtImg
              :src="img"
              class="h-16 w-full object-cover rounded border hover:opacity-80 transition"
            />
          </SwiperSlide>
        </Swiper>
      </div>

      <div class="text-center md:text-left">
        <h1 class="text-2xl sm:text-3xl font-bold mb-4">{{ product.name }}</h1>
        <p class="text-gray-700 text-base sm:text-lg leading-relaxed">
          {{ product.description }}
        </p>
        <button
          @click="modalOpen = true"
          class="mt-6 inline-block bg-gray-600 hover:bg-gray-700 text-white font-semibold py-2 px-6 rounded"
        >
          {{ $t('order.button') }}
        </button>
        <NuxtLink
          to="/products"
          class="mt-6 inline-block ml-2 bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2 px-6 rounded"
        >Boshqa mahsulotlarni korish</NuxtLink>
      </div>
    </div>

    <div v-else class="text-center text-gray-500 text-lg py-20">
      {{ $t('product.notFound') }}
    </div>
    <OrderModal
      :visible="modalOpen"
      :productName="product.name"
      @close="modalOpen = false"
    />
  </div>
  <Toast v-if="toast.show" :message="toast.message" :type="toast.type" />
</template>


<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Thumbs } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import { useProductStore } from '@/stores/products'
import Toast from '@/components/ui/Toast.vue'

const toast = reactive({
  show: false,
  message: '',
  type: 'success'
})


function showSuccess() {
  showToast('Successful!', type = 'success')
}
function showError() {
  showToast('Error!', type = 'error')
}
const route = useRoute()
const { locale } = useI18n()
const productStore = useProductStore()
const modalOpen = ref(false)

const product = computed(() => {
  const found = productStore.products.find(p => p.id === route.params.id)
  if (!found) return null
  return {
    ...found,
    name: found.name[locale.value],
    description: found.description[locale.value],
    imagePath: found.imagePath
  }
})

const thumbsSwiper = ref(null)
const onThumbsSwiper = (swiper) => {
  thumbsSwiper.value = swiper
}
</script>
