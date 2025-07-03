<template>
  <Teleport to="body">
    <Transition name="modal-fade">
      <div
        v-if="visible"
        class="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
        @click.self="close"
      >
        <Transition name="modal-slide">
          <div
            class="bg-white w-full max-w-md rounded-lg p-6 relative shadow-lg"
          >
            <button
              @click="close"
              class="absolute top-3 right-3 cursor-pointer text-gray-500 hover:text-black text-2xl"
            >
              &times;
            </button>

            <h2 class="text-xl font-bold mb-4">
              {{ $t('order.title') }}
            </h2>

            <form @submit.prevent="sendOrder">
              <input
                v-model="form.name"
                type="text"
                required
                :placeholder="$t('order.namePlaceholder')"
                class="w-full border px-3 py-2 mb-3 rounded text-sm"
              />
              <input
                v-model="form.phone"
                type="tel"
                required
                :placeholder="$t('order.phonePlaceholder')"
                class="w-full border px-3 py-2 mb-3 rounded text-sm"
              />
              <textarea
                v-model="form.message"
                rows="3"
                :placeholder="$t('order.messagePlaceholder')"
                class="w-full border px-3 py-2 mb-4 rounded text-sm"
              />

              <button
                type="submit"
                class="w-full bg-gray-600 hover:bg-gray-700 text-white font-semibold py-2 rounded"
              >
                {{ $t('order.submit') }}
              </button>
            </form>
          </div>
        </Transition>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
const emit = defineEmits(['close'])
const props = defineProps({ visible: Boolean, productName: String })

const form = reactive({
  name: '',
  phone: '',
  message: ''
})

const { $toast } = useNuxtApp()

async function sendOrder() {
  const fullMessage = `📦 *Buyurtma* \n\n🧾 *Mahsulot:* ${props.productName}\n👤 *F.I.O:* ${form.name}\n📞 *Telefon:* ${form.phone}\n📝 *Izoh:* ${form.message}`

  const { error } = await useFetch('/api/telegram', {
    method: 'POST',
    body: { text: fullMessage }
  })

  if (error.value) {
    $toast?.showToast('Xatolik yuz berdi', 'error')
  } else {
    $toast?.showToast('Buyurtma yuborildi', 'success')
    emit('close')
    form.name = form.phone = form.message = ''
  }
}

function close() {
  emit('close')
}
</script>

<style scoped>
/* Overlay fade in/out */
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.3s ease;
}
.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}

/* Modal content scale & fade */
.modal-slide-enter-active,
.modal-slide-leave-active {
  transition: all 0.3s ease;
}
.modal-slide-enter-from {
  transform: scale(0.95);
  opacity: 0;
}
.modal-slide-leave-to {
  transform: scale(0.95);
  opacity: 0;
}
</style>
