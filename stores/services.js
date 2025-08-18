import { useRuntimeConfig } from '#app'

export const useServiceStore = defineStore('service', {
  state: () => ({
    services: [
      {
      "id": 5,
      "name": {
        "uz": "LPG",
        "ru": "LPG",
        "en": "LPG",
        "tr": "LPG"
      },
      "description": {
        "uz": "",
        "ru": "",
        "en": "",
        "tr": ""
      },
      "created_at": "2025-07-24 15:19:52",
      "images": [
        "/services/8.jpg",
        "/services/1-2.jpg",
        "/services/1-3.jpg"
      ]
    },
    {
      "id": 4,
      "name": {
        "uz": "Sanoat",
        "ru": "Промышленность",
        "en": "Industry",
        "tr": "Endüstri"
      },
      "description": {
        "uz": "Biz turli sanoat tarmoqlari uchun moslashtirilgan mashina va uskunalarni ishlab chiqamiz, bu esa mijozlarimizga samaradorlikni oshirish va barqarorlikka erishishda yordam beradi.",
        "ru": "Мы проектируем и производим оборудование для различных промышленных отраслей, помогая клиентам повысить эффективность и достичь устойчивого развития.",
        "en": "We design and manufacture customized machinery and equipment for various industrial sectors, helping clients improve efficiency and meet sustainability goals.",
        "tr": "Genel endüstriyel sektörlerde ihtiyaç duyulan makinelerin ve ekipmanların tasarım ve üretimini gerçekleştiriyoruz. Müşterilerimize özelleştirilmiş çözümler sunarak verimliliklerini artırmalarına ve sürdürülebilirlik hedeflerine ulaşmalarına yardımcı oluyoruz."
      },
      "created_at": "2025-07-24 15:18:52",
      "images": [
        "/services/7.jpg",
        "/services/2-2.jpg",
        "/services/2-3.jpg"
      ]
    },
    {
      "id": 3,
      "name": {
        "uz": "Yog‘ sanoati",
        "ru": "Масложировая промышленность",
        "en": "Oil",
        "tr": "Yağ"
      },
      "description": {
        "uz": "Biz yog‘ sanoatida faoliyat yurituvchi mijozlarimizga chiqindi moylarni tozalash tizimlari, saqlash tanklari va qayta ishlash mashinalari kabi maxsus uskunalarni taqdim etamiz.",
        "ru": "Мы предлагаем индивидуальное оборудование: системы очистки отработанного масла, резервуары и машины для переработки для масложировой промышленности.",
        "en": "We provide customized machines and equipment such as waste oil treatment systems, storage tanks, and recycling machines for the oil industry.",
        "tr": "Yağ endüstrisinde faaliyet gösteren müşterilerimize özelleştirilmiş makineler ve ekipmanlar sunuyoruz. RA Makina olarak, atık yağ arıtma sistemleri, depolama tankları ve geri dönüşüm makineleri gibi ürünlerle müşterilerimizin iş süreçlerini optimize ediyoruz."
      },
      "created_at": "2025-07-24 15:16:28",
      "images": [
        "/services/6.jpg",
        "/services/4-2.jpg",
        "/services/4-3.jpg"
      ]
    },
    {
      "id": 2,
      "name": {
        "uz": "Neft sanoati",
        "ru": "Нефтяная промышленность",
        "en": "Petroleum",
        "tr": "Petrol"
      },
      "description": {
        "uz": "Biz neft sanoatida foydalaniladigan saqlash tanklari, chiqindi moyni tozalash tizimlari va qayta ishlash mashinalarini loyihalab ishlab chiqaramiz. Ishonchli va barqaror echimlarni taklif qilamiz.",
        "ru": "Мы проектируем и производим резервуары, системы очистки отработанных масел и перерабатывающие машины, предлагая надежные и устойчивые решения.",
        "en": "We design and produce storage tanks, waste oil treatment systems, and recycling machines used in the petroleum industry, offering reliable and sustainable solutions.",
        "tr": "WellEnergy olarak, petrol endüstrisinde kullanılan stok tankları, atık yağ arıtma sistemleri ve geri dönüşüm makineleri gibi ürünlerin tasarım ve üretimini gerçekleştiriyoruz. Müşterilerimize güvenilir ve sürdürülebilir çözümler sunarak enerji sektöründe önemli bir rol oynuyoruz."
      },
      "created_at": "2025-07-24 15:13:24",
      "images": [
        "/services/2.jpg",
        "/services/4-2.jpg",
        "/services/4-3.jpg"
      ]
    }
    ]
    // services: [],
  }),

  actions: {
    async fetchServices() {
      console.log('aaa');
      // const config = useRuntimeConfig()
      // const baseUrl = config.public.CPANEL_LINK

      // try {
      //   const res = await fetch(`${baseUrl}api/services`);
      //   const data = await res.json();
      //   if (data.status === 'success') {
      //     this.services = data.data;
      //   } else {
      //     console.error('Maʼlumot olishda xatolik:', data);
      //   }
      // } catch (error) {
      //   console.error('Fetch xatosi:', error);
      // }
    }
  },

  getters: {
    serviceCount: (state) => state.services.length
  }
})
