export const useServiceStore = defineStore('service', {
  state: () => ({
    services: [
      {
        id: 'S01',
        name: {
          en: 'Textile',
          uz: 'To‘qimachilik',
          ru: 'Текстиль',
          tr: 'Tekstil'
        },
        description: {
          en: 'We manufacture machines, boilers, and recycling systems used in the textile industry, focusing on energy efficiency and waste management for industrial facilities.',
          uz: 'Biz to‘qimachilik sanoatida foydalaniladigan mashinalar, qozonlar va qayta ishlash tizimlarini ishlab chiqaramiz. Sanoat obyektlarining energiya samaradorligini oshirish va chiqindilarni boshqarishni optimallashtirishga e’tibor qaratamiz.',
          ru: 'Мы производим машины, котлы и системы переработки, используемые в текстильной промышленности, с акцентом на энергоэффективность и управление отходами.',
          tr: 'RA Makina olarak müşterilerimize tekstil sektöründe kullanılan makinelerin, kazanların ve geri dönüşüm sistemlerinin üretimini sağlıyoruz. Endüstriyel tekstil tesislerinin enerji verimliliğini artırmaya ve atık yönetimini optimize etmeye odaklanıyoruz.'
        },
        imagePath: '/services/1.jpg'
      },
      {
        id: 'S02',
        name: {
          en: 'Petroleum',
          uz: 'Neft sanoati',
          ru: 'Нефтяная промышленность',
          tr: 'Petrol'
        },
        description: {
          en: 'We design and produce storage tanks, waste oil treatment systems, and recycling machines used in the petroleum industry, offering reliable and sustainable solutions.',
          uz: 'Biz neft sanoatida foydalaniladigan saqlash tanklari, chiqindi moyni tozalash tizimlari va qayta ishlash mashinalarini loyihalab ishlab chiqaramiz. Ishonchli va barqaror echimlarni taklif qilamiz.',
          ru: 'Мы проектируем и производим резервуары, системы очистки отработанных масел и перерабатывающие машины, предлагая надежные и устойчивые решения.',
          tr: 'RA Makina olarak, petrol endüstrisinde kullanılan stok tankları, atık yağ arıtma sistemleri ve geri dönüşüm makineleri gibi ürünlerin tasarım ve üretimini gerçekleştiriyoruz. Müşterilerimize güvenilir ve sürdürülebilir çözümler sunarak enerji sektöründe önemli bir rol oynuyoruz.'
        },
        imagePath: '/services/2.jpg'
      },
      {
        id: 'S03',
        name: {
          en: 'Logistics',
          uz: 'Logistika',
          ru: 'Логистика',
          tr: 'Lojistik'
        },
        description: {
          en: 'We offer customized solutions such as storage tanks, transfer systems, and energy-saving equipment for logistics operations.',
          uz: 'Biz logistika operatsiyalari uchun saqlash tanklari, uzatish tizimlari va energiya tejovchi uskunalar kabi maxsus echimlarni taklif qilamiz.',
          ru: 'Мы предлагаем индивидуальные решения для логистических операций: резервуары, системы передачи и энергосберегающее оборудование.',
          tr: 'RA Makina olarak, lojistik sektöründe faaliyet gösteren firmalara özel çözümler sunuyoruz. Depolama tankları, transfer sistemleri ve enerji tasarrufu sağlayan ekipmanlar gibi ürünlerle müşterilerimizin lojistik operasyonlarını optimize etmelerine yardımcı oluyoruz.'
        },
        imagePath: '/services/3.jpg'
      },
      {
        id: 'S04',
        name: {
          en: 'Food',
          uz: 'Oziq-ovqat',
          ru: 'Пищевая промышленность',
          tr: 'Gıda'
        },
        description: {
          en: 'We provide hygienic, reliable, and high-performance equipment such as boilers, storage tanks, and treatment systems for the food industry.',
          uz: 'Biz oziq-ovqat sanoati uchun gigiyenik, ishonchli va yuqori samarali qozonlar, saqlash tanklari va tozalash tizimlari kabi uskunalarni taqdim etamiz.',
          ru: 'Мы производим гигиеничное, надежное и высокоэффективное оборудование для пищевой промышленности: котлы, резервуары и очистные системы.',
          tr: 'Gıda endüstrisinde kullanılan kazanlar, stok tankları ve arıtma sistemleri gibi ürünlerin üretimini gerçekleştiriyoruz. RA Makina olarak, müşterilerimize hijyenik, güvenilir ve yüksek performanslı ekipmanlar sağlayarak gıda üretim süreçlerini destekliyoruz.'
        },
        imagePath: '/services/4.jpg'
      },
      {
        id: 'S05',
        name: {
          en: 'Transportation',
          uz: 'Transport',
          ru: 'Транспорт',
          tr: 'Ulaşım'
        },
        description: {
          en: 'We design and produce environmentally friendly and energy-efficient systems and machines for the transportation industry.',
          uz: 'Biz transport sohasida ekologik toza va energiya tejamkor tizimlar hamda mashinalarni ishlab chiqaramiz.',
          ru: 'Мы разрабатываем и производим экологически чистые и энергоэффективные машины для транспортной отрасли.',
          tr: 'Ulaşım sektöründe kullanılan kazanlar, enerji geri dönüşüm sistemleri ve diğer makinelerin tasarım ve üretimini yapıyoruz. RA Makina olarak, müşterilerimize çevre dostu ve enerji verimli çözümler sunarak sürdürülebilir ulaşımın önünü açıyoruz.'
        },
        imagePath: '/services/5.jpg'
      },
      {
        id: 'S06',
        name: {
          en: 'Oil',
          uz: 'Yog‘ sanoati',
          ru: 'Масложировая промышленность',
          tr: 'Yağ'
        },
        description: {
          en: 'We provide customized machines and equipment such as waste oil treatment systems, storage tanks, and recycling machines for the oil industry.',
          uz: 'Biz yog‘ sanoatida faoliyat yurituvchi mijozlarimizga chiqindi moylarni tozalash tizimlari, saqlash tanklari va qayta ishlash mashinalari kabi maxsus uskunalarni taqdim etamiz.',
          ru: 'Мы предлагаем индивидуальное оборудование: системы очистки отработанного масла, резервуары и машины для переработки для масложировой промышленности.',
          tr: 'Yağ endüstrisinde faaliyet gösteren müşterilerimize özelleştirilmiş makineler ve ekipmanlar sunuyoruz. RA Makina olarak, atık yağ arıtma sistemleri, depolama tankları ve geri dönüşüm makineleri gibi ürünlerle müşterilerimizin iş süreçlerini optimize ediyoruz.'
        },
        imagePath: '/services/6.jpg'
      },
      {
        id: 'S07',
        name: {
          en: 'Industry',
          uz: 'Sanoat',
          ru: 'Промышленность',
          tr: 'Endüstri'
        },
        description: {
          en: 'We design and manufacture customized machinery and equipment for various industrial sectors, helping clients improve efficiency and meet sustainability goals.',
          uz: 'Biz turli sanoat tarmoqlari uchun moslashtirilgan mashina va uskunalarni ishlab chiqamiz, bu esa mijozlarimizga samaradorlikni oshirish va barqarorlikka erishishda yordam beradi.',
          ru: 'Мы проектируем и производим оборудование для различных промышленных отраслей, помогая клиентам повысить эффективность и достичь устойчивого развития.',
          tr: 'Genel endüstriyel sektörlerde ihtiyaç duyulan makinelerin ve ekipmanların tasarım ve üretimini gerçekleştiriyoruz. Müşterilerimize özelleştirilmiş çözümler sunarak verimliliklerini artırmalarına ve sürdürülebilirlik hedeflerine ulaşmalarına yardımcı oluyoruz.'
        },
        imagePath: '/services/7.jpg'
      },
      {
        id: 'S08',
        name: {
          en: 'LPG',
          uz: 'LPG',
          ru: 'LPG',
          tr: 'LPG'
        },
        imagePath: '/services/8.jpg'
      }
    ]
  })
})
