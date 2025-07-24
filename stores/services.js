export const useServiceStore = defineStore('service', {
  state: () => ({
    // services: [
    //   {
    //     id: 'S02',
    //     name: {
    //       en: 'Petroleum',
    //       uz: 'Neft sanoati',
    //       ru: 'Нефтяная промышленность',
    //       tr: 'Petrol'
    //     },
    //     description: {
    //       en: 'We design and produce storage tanks, waste oil treatment systems, and recycling machines used in the petroleum industry, offering reliable and sustainable solutions.',
    //       uz: 'Biz neft sanoatida foydalaniladigan saqlash tanklari, chiqindi moyni tozalash tizimlari va qayta ishlash mashinalarini loyihalab ishlab chiqaramiz. Ishonchli va barqaror echimlarni taklif qilamiz.',
    //       ru: 'Мы проектируем и производим резервуары, системы очистки отработанных масел и перерабатывающие машины, предлагая надежные и устойчивые решения.',
    //       tr: 'WellEnergy olarak, petrol endüstrisinde kullanılan stok tankları, atık yağ arıtma sistemleri ve geri dönüşüm makineleri gibi ürünlerin tasarım ve üretimini gerçekleştiriyoruz. Müşterilerimize güvenilir ve sürdürülebilir çözümler sunarak enerji sektöründe önemli bir rol oynuyoruz.'
    //     },
    //     imagePath: '/services/2.jpg'
    //   },
    //   {
    //     id: 'S06',
    //     name: {
    //       en: 'Oil',
    //       uz: 'Yog‘ sanoati',
    //       ru: 'Масложировая промышленность',
    //       tr: 'Yağ'
    //     },
    //     description: {
    //       en: 'We provide customized machines and equipment such as waste oil treatment systems, storage tanks, and recycling machines for the oil industry.',
    //       uz: 'Biz yog‘ sanoatida faoliyat yurituvchi mijozlarimizga chiqindi moylarni tozalash tizimlari, saqlash tanklari va qayta ishlash mashinalari kabi maxsus uskunalarni taqdim etamiz.',
    //       ru: 'Мы предлагаем индивидуальное оборудование: системы очистки отработанного масла, резервуары и машины для переработки для масложировой промышленности.',
    //       tr: 'Yağ endüstrisinde faaliyet gösteren müşterilerimize özelleştirilmiş makineler ve ekipmanlar sunuyoruz. RA Makina olarak, atık yağ arıtma sistemleri, depolama tankları ve geri dönüşüm makineleri gibi ürünlerle müşterilerimizin iş süreçlerini optimize ediyoruz.'
    //     },
    //     imagePath: '/services/6.jpg'
    //   },
    //   {
    //     id: 'S07',
    //     name: {
    //       en: 'Industry',
    //       uz: 'Sanoat',
    //       ru: 'Промышленность',
    //       tr: 'Endüstri'
    //     },
    //     description: {
    //       en: 'We design and manufacture customized machinery and equipment for various industrial sectors, helping clients improve efficiency and meet sustainability goals.',
    //       uz: 'Biz turli sanoat tarmoqlari uchun moslashtirilgan mashina va uskunalarni ishlab chiqamiz, bu esa mijozlarimizga samaradorlikni oshirish va barqarorlikka erishishda yordam beradi.',
    //       ru: 'Мы проектируем и производим оборудование для различных промышленных отраслей, помогая клиентам повысить эффективность и достичь устойчивого развития.',
    //       tr: 'Genel endüstriyel sektörlerde ihtiyaç duyulan makinelerin ve ekipmanların tasarım ve üretimini gerçekleştiriyoruz. Müşterilerimize özelleştirilmiş çözümler sunarak verimliliklerini artırmalarına ve sürdürülebilirlik hedeflerine ulaşmalarına yardımcı oluyoruz.'
    //     },
    //     imagePath: '/services/7.jpg'
    //   },
    //   {
    //     id: 'S08',
    //     name: {
    //       en: 'LPG',
    //       uz: 'LPG',
    //       ru: 'LPG',
    //       tr: 'LPG'
    //     },
    //     imagePath: '/services/8.jpg'
    //   }
    // ]
    services: []
  }),

  actions: {
    async fetchServices() {
      try {
        const res = await fetch('http://localhost/ramakina-admin/api/services.php');
        const data = await res.json();
        if (data.status === 'success') {
          console.log(data.data);
          this.services = data.data;
        } else {
          console.error('Maʼlumot olishda xatolik:', data);
        }
      } catch (error) {
        console.error('Fetch xatosi:', error);
      }
    }
  },

  getters: {
    serviceCount: (state) => state.services.length
  }
})
