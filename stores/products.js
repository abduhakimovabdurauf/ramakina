export const useProductStore = defineStore('product', {
  state: () => ({
    products: [
      {
        id: 'M01',
        name: {
          en: 'Recycling Systems',
          uz: 'Qayta ishlash tizimlari',
          ru: 'Системы переработки',
          tr: 'Geri Dönüşüm Sistemleri'
        },
        description: {
          en: 'Recycling systems designed to process industrial waste into reusable materials efficiently and sustainably.',
          uz: 'Sanoat chiqindilarini samarali va barqaror tarzda qayta ishlashga mo‘ljallangan tizimlar.',
          ru: 'Системы, предназначенные для эффективной переработки промышленных отходов в пригодные для повторного использования материалы.',
          tr: 'Endüstriyel atıkları verimli ve sürdürülebilir şekilde yeniden kullanılabilir malzemelere dönüştüren sistemler.'
        },
        imagePath: ['/products/1.jpg', '/products/1-2.jpg', '/products/1-3.jpg']
      },
      {
        id: 'M02',
        name: {
          en: 'Thermal Oil Boilers',
          uz: 'Qizigan moy qozonlari',
          ru: 'Котлы с горячим маслом',
          tr: 'Kızgın Yağ Kazanları'
        },
        description: {
          en: 'Boilers that transfer heat through thermal oil instead of water, ideal for high-temperature industrial applications.',
          uz: 'Sanoatda yuqori haroratli jarayonlar uchun suv o‘rniga moy orqali issiqlik uzatadigan qozonlar.',
          ru: 'Котлы, использующие термальное масло вместо воды для передачи тепла при высоких температурах.',
          tr: 'Yüksek sıcaklık gerektiren sanayi uygulamaları için su yerine termal yağ kullanan kazanlar.'
        },
        imagePath: ['/products/2.jpg', '/products/2-2.jpg', '/products/2-3.jpg']
      },
      {
        id: 'M03',
        name: {
          en: 'LPG Tank',
          uz: 'LPG baki',
          ru: 'Резервуар для сжиженного газа',
          tr: 'LPG Tankı'
        },
        description: {
          en: 'Safe and durable tanks used for storing liquefied petroleum gas in industrial environments.',
          uz: 'Sanoat sharoitida suyuqlashtirilgan gazni xavfsiz saqlash uchun mo‘ljallangan mustahkam baklar.',
          ru: 'Прочные и безопасные резервуары для хранения сжиженного газа в промышленных условиях.',
          tr: 'Sanayi ortamlarında LPG’yi güvenli bir şekilde depolamak için kullanılan dayanıklı tanklar.'
        },
        imagePath: ['/products/3.jpg', '/products/3-2.jpg', '/products/3-3.jpg']
      },
      {
        id: 'M04',
        name: {
          en: 'Oil Refiner',
          uz: 'Neftni tozalash uskunasi',
          ru: 'Устройство для очистки нефти',
          tr: 'Petrol Arıtımcı'
        },
        description: {
          en: 'Equipment that purifies used oils and petroleum products for reuse, reducing environmental impact.',
          uz: 'Foydalanilgan moy va neft mahsulotlarini tozalab, ularni qayta ishlatish imkonini beradigan uskunalar.',
          ru: 'Оборудование для очистки отработанных масел и нефтепродуктов с целью повторного использования.',
          tr: 'Kullanılmış yağ ve petrol ürünlerini arıtarak yeniden kullanıma uygun hale getiren ekipman.'
        },
        imagePath: ['/products/4.jpg', '/products/4-2.jpg', '/products/4-3.jpg']
      },
      {
        id: 'M05',
        name: {
          en: 'Tanker',
          uz: 'Tanker',
          ru: 'Цистерна',
          tr: 'TANKER'
        },
        description: {
          en: 'Mobile tanks used for transporting liquids such as fuel, water, or chemicals safely over long distances.',
          uz: 'Suyuq yoqilg‘i, suv yoki kimyoviy moddalarni xavfsiz tashish uchun mo‘ljallangan ko‘chma tanklar.',
          ru: 'Мобильные цистерны для безопасной перевозки топлива, воды или химических веществ.',
          tr: 'Yakıt, su veya kimyasallar gibi sıvıların güvenli taşınması için kullanılan mobil tanklar.'
        },
        imagePath: ['/products/5.jpg', '/products/5-2.jpg', '/products/5-3.jpg']
      },
      {
        id: 'M06',
        name: {
          en: 'Storage Tank',
          uz: 'Saqlash baki',
          ru: 'Резервуар для хранения',
          tr: 'Stok Tankı'
        },
        description: {
          en: 'Large-capacity tanks used to store liquids or gases in industrial facilities under safety standards.',
          uz: 'Sanoat ob’ektlarida suyuqlik yoki gazni xavfsiz saqlash uchun mo‘ljallangan katta sig‘imli tanklar.',
          ru: 'Крупные резервуары для хранения жидкостей или газов на промышленных объектах.',
          tr: 'Sanayi tesislerinde sıvı veya gazların güvenli bir şekilde depolanmasını sağlayan büyük tanklar.'
        },
        imagePath: ['/products/6.jpg', '/products/6-2.jpg', '/products/6-3.jpg']
      },
      {
        id: 'M07',
        name: {
          en: 'Trailer Production',
          uz: 'Tirkama ishlab chiqarish',
          ru: 'Производство прицепов',
          tr: 'Dorse İmalatı'
        },
        description: {
          en: 'Design and manufacturing of custom industrial trailers for logistics and transportation needs.',
          uz: 'Logistika va tashish ehtiyojlari uchun maxsus sanoat tirkamalarini loyihalash va ishlab chiqarish.',
          ru: 'Проектирование и изготовление промышленных прицепов под заказ для нужд логистики и перевозок.',
          tr: 'Lojistik ve taşımacılık ihtiyaçlarına yönelik özel dorse üretimi.'
        },
        imagePath: ['/products/7.jpg', '/products/7-2.jpg', '/products/7-3.jpg']
      },
      {
        id: 'M08',
        name: {
          en: 'Heat Exchangers',
          uz: 'Issiqlik almashtirgichlar',
          ru: 'Теплообменники',
          tr: 'Eşanjörler'
        },
        description: {
          en: 'Devices that transfer heat between two fluids without mixing them, used in many industrial systems.',
          uz: 'Ikkita suyuqlik o‘rtasida ularni aralashtirmasdan issiqlik almashinuvini ta’minlaydigan qurilmalar.',
          ru: 'Устройства для теплообмена между двумя жидкостями без их смешивания, применяются в промышленности.',
          tr: 'İki sıvı arasında karışmadan ısı transferi sağlayan cihazlar, sanayide yaygın olarak kullanılır.'
        },
        imagePath: ['/products/8.jpg', '/products/8-2.jpg', '/products/8-3.jpg']
      },
      {
        id: 'M09',
        name: {
          en: 'Steam Boiler',
          uz: 'Bug‘ qozoni',
          ru: 'Паровой котел',
          tr: 'Buhar Kazanı'
        },
        description: {
          en: 'A boiler that generates steam by heating water, used in various industrial heating processes.',
          uz: 'Sanoatda suvni qizdirish orqali bug‘ hosil qiladigan qozon, turli texnologik jarayonlarda ishlatiladi.',
          ru: 'Котел, производящий пар путем нагрева воды, используется в промышленных процессах.',
          tr: 'Suyu ısıtarak buhar üreten ve çeşitli sanayi uygulamalarında kullanılan kazanlar.'
        },
        imagePath: ['/products/9.jpg', '/products/9-2.jpg', '/products/9-3.jpg']
      },
      {
        id: 'M10',
        name: {
          en: 'Cooling Tower',
          uz: 'Sovutish minorasi',
          ru: 'Охлаждающая башня',
          tr: 'Soğutma Kulesi'
        },
        description: {
          en: 'Structures used to cool water or other fluids for industrial processes by exchanging heat with the atmosphere.',
          uz: 'Sanoat jarayonlarida suyuqliklarni atmosfera orqali sovutish uchun mo‘ljallangan inshootlar.',
          ru: 'Сооружения для охлаждения воды или других жидкостей за счет теплообмена с атмосферой.',
          tr: 'Sıvıların atmosfer ile ısı alışverişi yoluyla soğutulmasını sağlayan yapılar.'
        },
        imagePath: ['/products/10.jpg', '/products/10-2.jpg', '/products/10-3.jpg']
      }
    ]
  }),
  
  getters: {

  }

});