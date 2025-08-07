import { defineStore } from 'pinia'
import { useRuntimeConfig } from '#app'

export const useProductStore = defineStore('product', {
  state: () => ({
    // products: [

    //   {
    //     "id": 27,
    //     "name": {
    //         "uz": "Sovutish minorasi",
    //         "ru": "Охлаждающая башня",
    //         "en": "Cooling Tower",
    //         "tr": "Soğutma Kulesi"
    //     },
    //     "description": {
    //       "uz": "Sanoat jarayonlarida suyuqliklarni atmosfera orqali sovutish uchun mo‘ljallangan inshootlar.",
    //       "ru": "Сооружения для охлаждения воды или других жидкостей за счет теплообмена с атмосферой.",
    //       "en": "Structures used to cool water or other fluids for industrial processes by exchanging heat with the atmosphere.",
    //       "tr": "Sıvıların atmosfer ile ısı alışverişi yoluyla soğutulmasını sağlayan yapılar."
    //     },
    //     "created_at": "2025-07-24 15:49:17",
    //     "images": [
    //       "/products/1.jpg",
    //       "/products/1-2.jpg",
    //       "/products/1-3.jpg"
    //     ]
    //   },
    // {
    //   "id": 26,
    //   "name": {
    //     "uz": "Bug‘ qozoni",
    //     "ru": "Паровой котел",
    //     "en": "Steam Boiler",
    //     "tr": "Buhar Kazanı"
    //   },
    //   "description": {
    //     "uz": "Sanoatda suvni qizdirish orqali bug‘ hosil qiladigan qozon, turli texnologik jarayonlarda ishlatiladi.",
    //     "ru": "Котел, производящий пар путем нагрева воды, используется в промышленных процессах.",
    //     "en": "A boiler that generates steam by heating water, used in various industrial heating processes.",
    //     "tr": "Suyu ısıtarak buhar üreten ve çeşitli sanayi uygulamalarında kullanılan kazanlar."
    //   },
    //   "created_at": "2025-07-24 15:47:49",
    //   "images": [
    //     "/products/2.jpg",
    //     "/products/2-2.jpg",
    //     "/products/2-3.jpg"
    //   ]
    // },
    // {
    //   "id": 25,
    //   "name": {
    //     "uz": "Issiqlik almashtirgichlar",
    //     "ru": "Теплообменники",
    //     "en": "Heat Exchangers",
    //     "tr": "Eşanjörler"
    //   },
    //   "description": {
    //     "uz": "Ikkita suyuqlik o‘rtasida ularni aralashtirmasdan issiqlik almashinuvini ta’minlaydigan qurilmalar.",
    //     "ru": "Устройства для теплообмена между двумя жидкостями без их смешивания, применяются в промышленности.",
    //     "en": "Devices that transfer heat between two fluids without mixing them, used in many industrial systems.",
    //     "tr": "İki sıvı arasında karışmadan ısı transferi sağlayan cihazlar, sanayide yaygın olarak kullanılır."
    //   },
    //   "created_at": "2025-07-24 15:46:29",
    //   "images": [
    //     "/products/3.jpg",
    //     "/products/3-2.jpg",
    //     "/products/3-3.jpg"
    //   ]
    // },
    // {
    //   "id": 24,
    //   "name": {
    //     "uz": "Tirkama ishlab chiqarish",
    //     "ru": "Производство прицепов",
    //     "en": "Trailer Production",
    //     "tr": "Dorse İmalatı"
    //   },
    //   "description": {
    //     "uz": "Logistika va tashish ehtiyojlari uchun maxsus sanoat tirkamalarini loyihalash va ishlab chiqarish.",
    //     "ru": "Проектирование и изготовление промышленных прицепов под заказ для нужд логистики и перевозок.",
    //     "en": "Design and manufacturing of custom industrial trailers for logistics and transportation needs.",
    //     "tr": "Lojistik ve taşımacılık ihtiyaçlarına yönelik özel dorse üretimi."
    //   },
    //   "created_at": "2025-07-24 15:44:37",
    //   "images": [
    //     "/products/4.jpg",
    //     "/products/4-2.jpg",
    //     "/products/4-3.jpg"
    //   ]
    // },
    // {
    //   "id": 23,
    //   "name": {
    //     "uz": "Saqlash baki",
    //     "ru": "Резервуар для хранения",
    //     "en": "Storage Tank",
    //     "tr": "Stok Tankı"
    //   },
    //   "description": {
    //     "uz": "Sanoat ob’ektlarida suyuqlik yoki gazni xavfsiz saqlash uchun mo‘ljallangan katta sig‘imli tanklar.",
    //     "ru": "Крупные резервуары для хранения жидкостей или газов на промышленных объектах.",
    //     "en": "Large-capacity tanks used to store liquids or gases in industrial facilities under safety standards.",
    //     "tr": "Sanayi tesislerinde sıvı veya gazların güvenli bir şekilde depolanmasını sağlayan büyük tanklar."
    //   },
    //   "created_at": "2025-07-24 15:43:22",
    //   "images": [
    //     "/products/5.jpg",
    //     "/products/5-2.jpg",
    //     "/products/5-3.jpg"
    //   ]
    // },
    // {
    //   "id": 22,
    //   "name": {
    //     "uz": "Tanker",
    //     "ru": "Цистерна",
    //     "en": "Tanker",
    //     "tr": "TANKER"
    //   },
    //   "description": {
    //     "uz": "Suyuq yoqilg‘i, suv yoki kimyoviy moddalarni xavfsiz tashish uchun mo‘ljallangan ko‘chma tanklar.",
    //     "ru": "Мобильные цистерны для безопасной перевозки топлива, воды или химических веществ.",
    //     "en": "Mobile tanks used for transporting liquids such as fuel, water, or chemicals safely over long distances.",
    //     "tr": "Yakıt, su veya kimyasallar gibi sıvıların güvenli taşınması için kullanılan mobil tanklar."
    //   },
    //   "created_at": "2025-07-24 15:41:37",
    //   "images": [
    //     "/products/6.jpg",
    //     "/products/6-2.jpg",
    //     "/products/6-3.jpg"
    //   ]
    // },
    // {
    //   "id": 21,
    //   "name": {
    //     "uz": "Neftni tozalash uskunasi",
    //     "ru": "Устройство для очистки нефти",
    //     "en": "Oil Refiner",
    //     "tr": "Petrol Arıtımcı"
    //   },
    //   "description": {
    //     "uz": "Foydalanilgan moy va neft mahsulotlarini tozalab, ularni qayta ishlatish imkonini beradigan uskunalar.",
    //     "ru": "Оборудование для очистки отработанных масел и нефтепродуктов с целью повторного использования.",
    //     "en": "Equipment that purifies used oils and petroleum products for reuse, reducing environmental impact.",
    //     "tr": "Kullanılmış yağ ve petrol ürünlerini arıtarak yeniden kullanıma uygun hale getiren ekipman."
    //   },
    //   "created_at": "2025-07-24 15:40:11",
    //   "images": [
    //     "/products/7.jpg",
    //     "/products/7-2.jpg",
    //     "/products/7-3.jpg"
    //   ]
    // },
    // {
    //   "id": 20,
    //   "name": {
    //     "uz": "LPG baki",
    //     "ru": "Резервуар для сжиженного газа",
    //     "en": "LPG Tank",
    //     "tr": "LPG Tanki"
    //   },
    //   "description": {
    //     "uz": "Sanoat sharoitida suyuqlashtirilgan gazni xavfsiz saqlash uchun mo‘ljallangan mustahkam baklar.",
    //     "ru": "Прочные и безопасные резервуары для хранения сжиженного газа в промышленных условиях.",
    //     "en": "Safe and durable tanks used for storing liquefied petroleum gas in industrial environments.",
    //     "tr": "Sanayi ortamlarında LPG’yi güvenli bir şekilde depolamak için kullanılan dayanıklı tanklar."
    //   },
    //   "created_at": "2025-07-23 17:59:24",
    //   "images": [
    //     "/products/8.jpg",
    //     "/products/8-2.jpg",
    //     "/products/8-3.jpg"
    //   ]
    // },
    // {
    //   "id": 19,
    //   "name": {
    //     "uz": "Qizigan moy qozonlari",
    //     "ru": "Котлы с горячим маслом",
    //     "en": "Thermal Oil Boilers",
    //     "tr": "Kızgın Yağ Kazanları"
    //   },
    //   "description": {
    //     "uz": "Sanoatda yuqori haroratli jarayonlar uchun suv o‘rniga moy orqali issiqlik uzatadigan qozonlar.",
    //     "ru": "Котлы, использующие термальное масло вместо воды для передачи тепла при высоких температурах.",
    //     "en": "Boilers that transfer heat through thermal oil instead of water, ideal for high-temperature industrial applications.",
    //     "tr": "Yüksek sıcaklık gerektiren sanayi uygulamaları için su yerine termal yağ kullanan kazanlar."
    //   },
    //   "created_at": "2025-07-23 17:56:42",
    //   "images": [
    //     "/products/9.jpg",
    //     "/products/9-2.jpg",
    //     "/products/9-3.jpg"
    //   ]
    // },
    // {
    //   "id": 18,
    //   "name": {
    //     "uz": "Qayta ishlash tizimlari",
    //     "ru": "Системы переработки",
    //     "en": "Recycling Systems",
    //     "tr": "Geri Dönüşüm Sistemleri"
    //   },
    //   "description": {
    //     "uz": "Sanoat chiqindilarini samarali va barqaror tarzda qayta ishlashga mo‘ljallangan tizimlar.Sanoat chiqindilarini samarali va barqaror tarzda qayta ishlashga mo‘ljallangan tizimlar.",
    //     "ru": "Системы, предназначенные для эффективной переработки промышленных отходов в пригодные для повторного использования материалы.",
    //     "en": "Recycling systems designed to process industrial waste into reusable materials efficiently and sustainably.",
    //     "tr": "Endüstriyel atıkları verimli ve sürdürülebilir şekilde yeniden kullanılabilir malzemelere dönüştüren sistemler."
    //   },
    //   "created_at": "2025-07-23 17:52:40",
    //   "images": [
    //     "/products/10.jpg",
    //     "/products/10-2.jpg",
    //     "/products/10-3.jpg"
    //   ]
    // }
    // ]
    products: []
  }),

  actions: {
    async fetchProducts() {
      const config = useRuntimeConfig()
      const baseUrl = config.public.CPANEL_LINK

      try {
        const res = await fetch(`${baseUrl}api/products`)
        const data = await res.json()
        if (data.status === 'success') {
          console.log(data.data)
          this.products = data.data
        } else {
          console.error('Maʼlumot olishda xatolik:', data)
        }
      } catch (error) {
        console.error('Fetch xatosi:', error)
      }
    }
  },

  getters: {
    productCount: (state) => state.products.length
  }
})
