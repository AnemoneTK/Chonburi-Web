document.addEventListener("DOMContentLoaded", () => {
  // Mobile Menu Toggle
  const mobileMenu = document.getElementById("mobile-menu");
  const navMenu = document.querySelector(".nav-menu");

  mobileMenu.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
    navMenu.classList.toggle("active");
  });

  // Close mobile menu when clicking on a nav link
  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("active");
      navMenu.classList.remove("active");
    });
  });

  // Beach Slider
  const beachSlider = document.querySelector(".beach-slider");
  const prevBtn = document.getElementById("prev-beach");
  const nextBtn = document.getElementById("next-beach");
  const beachCards = document.querySelectorAll(".beach-card");

  let scrollAmount = 0;
  const cardWidth = beachCards[0].offsetWidth + 20; // Card width + gap

  prevBtn.addEventListener("click", () => {
    scrollAmount = Math.max(scrollAmount - cardWidth, 0);
    beachSlider.scrollTo({
      left: scrollAmount,
      behavior: "smooth",
    });
  });

  nextBtn.addEventListener("click", () => {
    scrollAmount = Math.min(
      scrollAmount + cardWidth,
      beachSlider.scrollWidth - beachSlider.clientWidth
    );
    beachSlider.scrollTo({
      left: scrollAmount,
      behavior: "smooth",
    });
  });

  // Sticky Header
  const header = document.querySelector("header");
  const heroSection = document.querySelector(".hero");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.style.padding = "5px 0";
      header.style.backgroundColor = "rgba(255, 255, 255, 0.95)";
    } else {
      header.style.padding = "15px 0";
      header.style.backgroundColor = "rgba(255, 255, 255, 0.95)";
    }
  });

  // Smooth Scrolling for Anchor Links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      if (targetId === "#") return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        const headerHeight = header.offsetHeight;
        const targetPosition =
          targetElement.getBoundingClientRect().top +
          window.pageYOffset -
          headerHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    });
  });

  // Form Submission
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("ขอบคุณสำหรับข้อความของคุณ! เราจะติดต่อกลับโดยเร็วที่สุด");
      contactForm.reset();
    });
  }

  const newsletterForm = document.getElementById("newsletter-form");
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("ขอบคุณสำหรับการสมัครรับข่าวสาร!");
      newsletterForm.reset();
    });
  }

  // Add Animation on Scroll
  const animateOnScroll = () => {
    const elements = document.querySelectorAll(
      ".stat-item, .beach-card, .attraction-item, .info-card"
    );

    elements.forEach((element) => {
      const elementPosition = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (elementPosition < windowHeight - 100) {
        element.style.opacity = "1";
        element.style.transform = "translateY(0)";
      }
    });
  };

  // Initialize animation styles
  const elementsToAnimate = document.querySelectorAll(
    ".stat-item, .beach-card, .attraction-item, .info-card"
  );
  elementsToAnimate.forEach((element) => {
    element.style.opacity = "0";
    element.style.transform = "translateY(20px)";
    element.style.transition = "opacity 0.6s ease, transform 0.6s ease";
  });

  // Run animation on load and scroll
  window.addEventListener("load", animateOnScroll);
  window.addEventListener("scroll", animateOnScroll);
});

// Modal Data
const beachData = {
  namsai: {
    title: "หาดน้ำใส",
    description:
      "หาดน้ำใสเป็นชายหาดที่มีน้ำทะเลใสและสะอาด ตั้งอยู่ในอำเภอสัตหีบ จังหวัดชลบุรี เหมาะสำหรับการดำน้ำดูปะการังและพักผ่อนริมชายหาด มีพื้นที่ตั้งแคมป์และร้านอาหารเล็กๆ ริมโขดหิน",
    activities: [
      "ดำน้ำดูปะการัง",
      "ดำน้ำตื้น (Snorkeling)",
      "ตั้งแคมป์และกางเต็นท์",
      "ถ่ายภาพวิวทะเล",
      "ปิกนิกริมชายหาด",
      "นั่งเรือชมชายฝั่ง",
    ],
    info: {
      ระยะทาง: "160 กม. จากกรุงเทพฯ",
      เวลาเดินทาง: "2 ชั่วโมง",
      ค่าเข้าชม: "ฟรี (ค่าบริการอุปกรณ์ดำน้ำเริ่มต้น 200 บาท)",
      เวลาเปิด: "8:00–18:00 น.",
      ที่จอดรถ: "มีลานจอดรถฟรี",
      สิ่งอำนวยความสะดวก: "ห้องน้ำ, ร้านกาแฟ, จุดให้เช่าอุปกรณ์ดำน้ำ",
    },
    images: [
      "https://img.wongnai.com/p/1920x0/2024/07/06/e94082b1169442f1add401f92ec78ec0.jpg",
      "https://img.wongnai.com/p/1920x0/2024/07/06/4c737a58e0724e3daae7a89f0a9edfe5.jpg",
      "https://img.wongnai.com/p/1920x0/2024/07/06/26af5015e13b4669964b22ac7553e2a6.jpg",
      "https://img.wongnai.com/p/1920x0/2024/07/06/841a09afe8aa4e95aee528bd64c5f0ab.jpg",
    ],
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3893.6800393038225!2d100.94198647586882!3d12.603326422843862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31028b8ea8bcd8d7%3A0x4780c450656a024e!2z4Lir4Liy4LiU4LiZ4LmJ4Liz4LmD4Liq!5e0!3m2!1sth!2sth!4v1752870597515!5m2!1sth!2sth",
  },

  nangram: {
    title: "หาดนางรำ",
    description:
      "หาดนางรำตั้งอยู่ใกล้กับหาดน้ำใสในพื้นที่อำเภอสัตหีบ จังหวัดชลบุรี มีทรายสีทองละเอียด น้ำตื้นและช่วยให้เล่นน้ำได้ปลอดภัย เหมาะสำหรับครอบครัวและกิจกรรมทางน้ำเบาๆ",
    activities: [
      "เล่นน้ำทะเล",
      "ปั่นจักรยานเส้นทางชายหาด",
      "ขับเจ็ตสกี",
      "นั่งเรือคายัค",
      "ถ่ายรูปกับหินลักษณะสวยงาม",
      "จัดปิกนิกริมชายหาด",
    ],
    info: {
      ระยะทาง: "158 กม. จากกรุงเทพฯ",
      เวลาเดินทาง: "2 ชั่วโมง",
      ค่าเข้าชม: "ฟรี",
      เวลาเปิด: "8:00–18:00 น.",
      ที่จอดรถ: "มีลานจอดรถ",
      สิ่งอำนวยความสะดวก: "ห้องน้ำ, ร้านจำหน่ายของที่ระลึก, จุดเช่าอุปกรณ์กีฬา",
    },
    images: [
      "https://img.wongnai.com/p/1920x0/2018/06/14/cfe894c90c4c401e8baf300ee7d4a935.jpg",
      "https://img.wongnai.com/p/1920x0/2024/05/24/f6ec89f020484fb9be3ac3ee8b65f98a.jpg",
      "https://img.wongnai.com/p/1920x0/2025/03/06/70acc4887124430dba324ca8c70e6862.jpg",
      "https://img.wongnai.com/p/1920x0/2019/09/07/f0e8053b90e1423e8e2c81f0d35a3499.jpg",
    ],
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1946.7164591735127!2d100.91690529839565!3d12.619580006383407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31028a4eb9f2d3fd%3A0x8e8135ae94f84160!2z4Lir4Liy4LiU4LiZ4Liy4LiH4Lij4Liz!5e0!3m2!1sth!2sth!4v1752870578304!5m2!1sth!2sth",
  },

  pattaya: {
    title: "หาดพัทยา",
    description:
      "หาดพัทยาเป็นหนึ่งในชายหาดที่มีชื่อเสียงที่สุดของประเทศไทย ตั้งอยู่ในเมืองพัทยา จังหวัดชลบุรี มีความยาวประมาณ 4 กิโลเมตร เป็นศูนย์กลางการท่องเที่ยวที่มีชีวิตชีวาทั้งกลางวันและกลางคืน มีกิจกรรมทางน้ำมากมาย ร้านอาหาร บาร์ และสถานบันเทิงครบครัน",
    activities: [
      "กีฬาทางน้ำ (เจ็ตสกี, พาราเซลลิ่ง, บานาน่าโบ๊ท)",
      "ดำน้ำดูปะการัง",
      "นวดแผนไทยริมชายหาด",
      "ช้อปปิ้งที่ตลาดกลางคืน",
      "ชมการแสดงคาบาเร่ต์",
      "ล่องเรือชมพระอาทิตย์ตก",
    ],
    info: {
      ระยะทาง: "147 กม. จากกรุงเทพฯ",
      เวลาเดินทาง: "1.5–2 ชั่วโมง",
      ค่าเข้าชม: "ฟรี",
      เวลาเปิด: "24 ชั่วโมง",
      ที่จอดรถ: "มีบริการ",
      สิ่งอำนวยความสะดวก: "ห้องน้ำ, ร้านอาหาร, ที่พัก",
    },
    images: [
      "https://i0.wp.com/www.iurban.in.th/wp-content/uploads/2019/12/trave-pattaya-beach-1.jpg?w=2048&ssl=1",
      "https://i0.wp.com/www.iurban.in.th/wp-content/uploads/2019/09/PATTAYA-Jiraz-87.jpg?resize=1200%2C900&ssl=1",
      "https://kongthaijeen.com/wp-content/uploads/2023/03/188.jpg",
      "https://storage-wp.thaipost.net/2022/09/%E0%B8%A1%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%A1%E0%B8%B7%E0%B8%AD%E0%B8%871-%E0%B8%8A%E0%B8%B2%E0%B8%A2%E0%B8%AB%E0%B8%B2%E0%B8%94%E0%B8%9E%E0%B8%B1%E0%B8%97%E0%B8%A2%E0%B8%B2.jpg",
    ],
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31108.809956631332!2d100.84252887431643!3d12.933331!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310297e2fee3fe03%3A0x74a84e1422ec1d0a!2z4Lir4Liy4LiU4Lie4Lix4LiX4Lii4Liy!5e0!3m2!1sth!2sth!4v1752870554541!5m2!1sth!2sth",
  },

  bangsaen: {
    title: "หาดบางแสน",
    description:
      "หาดบางแสนเป็นชายหาดที่ได้รับความนิยมจากคนไทยมาอย่างยาวนาน ตั้งอยู่ในอำเภอเมืองชลบุรี ห่างจากกรุงเทพฯ เพียง 100 กิโลเมตร เป็นชายหาดที่เหมาะสำหรับครอบครัว มีบรรยากาศสบายๆ และอาหารทะเลสดใหม่ราคาไม่แพง",
    activities: [
      "เล่นน้ำทะเล",
      "ขี่จักรยานริมชายหาด",
      "ตกปลา",
      "ชิมอาหารทะเลสด",
      "เดินเล่นที่ถนนคนเดิน",
      "ชมพระอาทิตย์ขึ้น",
    ],
    info: {
      ระยะทาง: "100 กม. จากกรุงเทพฯ",
      เวลาเดินทาง: "1.5 ชั่วโมง",
      ค่าเข้าชม: "ฟรี",
      เวลาเปิด: "24 ชั่วโมง",
      ที่จอดรถ: "มีบริการ",
      สิ่งอำนวยความสะดวก: "ห้องน้ำ, ร้านอาหาร, ที่พัก",
    },
    images: [
      "https://s359.kapook.com/pagebuilder/4210880e-ff3b-4bfa-af8f-3e3ae011602d.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdYeHIk4lOs7MJxPapbK7-YdLxaczhVS4dOw&s",
      "https://www.chillpainai.com/src/wewakeup/scoop/images/fbc1f32c84072f600be5440ae3236f85c845d186.jpg",
      "https://res.klook.com/image/upload/q_85/c_fill,w_750/v1675415100/blog/lqqqoaaor1hg4estbo9x.jpg",
    ],
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15532.203872089296!2d100.90203301182171!3d13.284755576539586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3102b4b023600ccf%3A0x9270912877b9184a!2z4Lir4Liy4LiU4Lia4Liy4LiH4LmB4Liq4LiZ!5e0!3m2!1sth!2sth!4v1752870523351!5m2!1sth!2sth",
  },

  kohlarn: {
    title: "เกาะล้าน",
    description:
      "เกาะล้านเป็นเกาะสวยงามที่ตั้งอยู่ห่างจากชายฝั่งพัทยาประมาณ 7 กิโลเมตร มีชายหาดทรายขาวละเอียดและน้ำทะเลใสสีฟ้าครามสวยงาม เป็นจุดหมายปลายทางยอดนิยมสำหรับนักท่องเที่ยวที่ต้องการหลีกหนีจากความวุ่นวายของเมือง",
    activities: [
      "ดำน้ำดูปะการัง",
      "เล่นกีฬาทางน้ำ",
      "นั่งเรือหางยาวชมเกาะ",
      "ถ่ายรูปกับวิวทะเลสวยงาม",
      "ชิมอาหารทะเลสดใหม่",
      "พักผ่อนบนชายหาด",
    ],
    info: {
      ระยะทาง: "7 กม. จากพัทยา",
      เวลาเดินทาง: "45 นาที (เรือเฟอร์รี่)",
      ค่าเข้าชม: "ฟรี",
      ค่าเรือ: "30 บาท/คน",
      เวลาเปิด: "6:00–18:00 น.",
      สิ่งอำนวยความสะดวก: "ห้องน้ำ, ร้านอาหาร, เช่าอุปกรณ์",
    },
    images: [
      "https://pix10.agoda.net/geo/poi/142054/c71abd82345d2cafefd05dd65599fbcb.jpg?ca=19&ce=1&s=414x232&ar=16x9",
      "https://roijang.com/wp-content/uploads/2022/07/view-koh-larn-pattaya.jpg",
      "https://img.wongnai.com/p/1920x0/2020/08/21/61c3877e32314c4d86ed462d2fb499d7.jpg",
      "https://res.klook.com/image/upload/q_85/c_fill,w_750/v1679602430/blog/waqn2rx6ppowizxztkl1.jpg",
    ],
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31110.775687764974!2d100.77830544999999!3d12.917555949999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310298386eef76d9%3A0x12b39d7dc3ae41ea!2z4LmA4LiB4Liy4Liw4Lil4LmJ4Liy4LiZ!5e0!3m2!1sth!2sth!4v1752870356912!5m2!1sth!2sth",
  },

  jomtien: {
    title: "หาดจอมเทียน",
    description:
      "หาดจอมเทียนเป็นชายหาดที่เงียบสงบกว่าหาดพัทยา เหมาะสำหรับผู้ที่ต้องการพักผ่อนอย่างแท้จริง มีชายหาดยาวเหยียดและกิจกรรมกีฬาทางน้ำที่หลากหลาย บรรยากาศเป็นกันเองและเหมาะสำหรับครอบครัว",
    activities: [
      "วินด์เซิร์ฟ",
      "ไคท์เซิร์ฟ",
      "เจ็ตสกี",
      "ตกปลา",
      "นวดแผนไทย",
      "ชมพระอาทิตย์ตก",
    ],
    info: {
      ระยะทาง: "165 กม. จากกรุงเทพฯ",
      เวลาเดินทาง: "2 ชั่วโมง",
      ค่าเข้าชม: "ฟรี",
      เวลาเปิด: "24 ชั่วโมง",
      ที่จอดรถ: "มีบริการ",
      สิ่งอำนวยความสะดวก: "ห้องน้ำ, ร้านอาหาร, ที่พัก",
    },
    images: [
      "https://roijang.com/wp-content/uploads/2023/10/shutterstock_723475513.jpg",
      "https://sattahipcity.com/media/k2/items/cache/1d73e13563b8be946c0f00bab252d7ea_XL.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEHYw5uXmAXg701kmGv9DNu0FgCaS7VIuM3A&s",
      "https://lh4.googleusercontent.com/proxy/NDrkEGvLN7OLk9LrxnLOJuGhUwl7brlJhBZMFLX58ShBQz1cY2tiemojON0gjL-QPfCsZv_RlBhW-mS2fyjzZr8jG9Xt073Bwtel",
    ],
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31114.308903296722!2d100.85297291208093!3d12.88915407925983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310296910356fe17%3A0xe9d09ef173c1958f!2z4Lir4Liy4LiU4LiI4Lit4Lih4LmA4LiX4Li14Lii4LiZ!5e0!3m2!1sth!2sth!4v1752870453235!5m2!1sth!2sth",
  },
};

const attractionData = {
  sanctuary: {
    title: "ปราสาทสัจธรรม",
    description:
      "ปราสาทสัจธรรมเป็นสถาปัตยกรรมไม้ที่งดงามและใหญ่ที่สุดในโลก สร้างขึ้นโดยไม่ใช้ตะปูเลย แต่ใช้เทคนิคการประกอบไม้แบบดั้งเดิม ภายในปราสาทประดับด้วยงานแกะสลักไม้ที่ละเอียดอ่อน สะท้อนปรัชญาและศิลปะแห่งตะวันออก",
    highlights: [
      "สถาปัตยกรรมไม้ที่ไม่ใช้ตะปู",
      "งานแกะสลักไม้ที่ประณีต",
      "การแสดงศิลปะและวัฒนธรรมไทย",
      "วิวทะเลที่สวยงาม",
      "การแสดงม้าและช้าง",
      "พิพิธภัณฑ์ศิลปะ",
    ],
    info: {
      เวลาเปิด: "8:00-17:00 น.",
      ค่าเข้าชม: "500 บาท (ผู้ใหญ่)",
      ระยะทาง: "12 กม. จากพัทยา",
      เวลาเดินทาง: "20 นาที",
      ที่จอดรถ: "มีบริการฟรี",
      สิ่งอำนวยความสะดวก: "ร้านอาหาร, ร้านของที่ระลึก",
    },
    images: [
      "images/sanctuary-of-truth.jpg",
      "images/sanctuary-1.jpg",
      "images/sanctuary-2.jpg",
      "images/sanctuary-3.jpg",
    ],
  },
  nongnooch: {
    title: "สวนนงนุช",
    description:
      "สวนนงนุชเป็นสวนพฤกษศาสตร์ขนาดใหญ่ที่มีพื้นที่กว่า 500 ไร่ มีการจัดสวนที่สวยงามหลากหลายรูปแบบ ทั้งสวนฝรั่งเศส สวนยุโรป และสวนไผ่ พร้อมการแสดงวัฒนธรรมไทยและช้างที่น่าประทับใจ",
    highlights: [
      "สวนพฤกษศาสตร์ขนาดใหญ่",
      "การแสดงช้าง",
      "การแสดงวัฒนธรรมไทย",
      "สวนแคคตัสและไผ่",
      "สวนผีเสื้อ",
      "รถไฟเล็กชมสวน",
    ],
    info: {
      เวลาเปิด: "8:00-18:00 น.",
      ค่าเข้าชม: "500 บาท (ผู้ใหญ่)",
      ระยะทาง: "15 กม. จากพัทยา",
      เวลาเดินทาง: "25 นาที",
      ที่จอดรถ: "มีบริการฟรี",
      สิ่งอำนวยความสะดวก: "ร้านอาหาร, ที่พัก, สปา",
    },
    images: [
      "images/nong-nooch.jpg",
      "images/nongnooch-1.jpg",
      "images/nongnooch-2.jpg",
      "images/nongnooch-3.jpg",
    ],
  },
  underwater: {
    title: "อันเดอร์วอเตอร์เวิลด์",
    description:
      "อันเดอร์วอเตอร์เวิลด์พัทยาเป็นพิพิธภัณฑ์สัตว์น้ำที่ใหญ่ที่สุดในเอเชียตะวันออกเฉียงใต้ มีอุโมงค์ใต้น้ำยาว 100 เมตร ให้ผู้เยี่ยมชมได้สัมผัสกับโลกใต้ทะเลอย่างใกล้ชิด พร้อมสัตว์น้ำหลากหลายชนิดจากทั่วโลก",
    highlights: [
      "อุโมงค์ใต้น้ำยาว 100 เมตร",
      "ฉลามและปลากระเบนยักษ์",
      "การแสดงให้อาหารสัตว์น้ำ",
      "สัตว์น้ำจืดและน้ำเค็ม",
      "พิพิธภัณฑ์ปะการัง",
      "กิจกรรมเรียนรู้สำหรับเด็ก",
    ],
    info: {
      เวลาเปิด: "9:00-18:00 น.",
      ค่าเข้าชม: "500 บาท (ผู้ใหญ่)",
      ระยะทาง: "5 กม. จากพัทยา",
      เวลาเดินทาง: "15 นาที",
      ที่จอดรถ: "มีบริการ",
      สิ่งอำนวยความสะดวก: "ร้านอาหาร, ร้านของที่ระลึก",
    },
    images: [
      "images/underwater-world.jpg",
      "images/underwater-1.jpg",
      "images/underwater-2.jpg",
      "images/underwater-3.jpg",
    ],
  },
  tiger: {
    title: "สวนเสือศรีราชา",
    description:
      "สวนเสือศรีราชาเป็นสวนสัตว์ที่มีเสือมากที่สุดในโลก มีเสือกว่า 400 ตัว พร้อมสัตว์อื่นๆ อีกมากมาย มีการแสดงที่น่าตื่นเต้นและกิจกรรมให้ผู้เยี่ยมชมได้สัมผัสกับสัตว์อย่างใกล้ชิด",
    highlights: [
      "เสือกว่า 400 ตัว",
      "การแสดงเสือและจระเข้",
      "ถ่ายรูปกับเสือ",
      "การแสดงหมูป่า",
      "สวนสัตว์ขนาดใหญ่",
      "กิจกรรมให้อาหารสัตว์",
    ],
    info: {
      เวลาเปิด: "8:00-18:00 น.",
      ค่าเข้าชม: "450 บาท (ผู้ใหญ่)",
      ระยะทาง: "30 กม. จากพัทยา",
      เวลาเดินทาง: "45 นาที",
      ที่จอดรถ: "มีบริการฟรี",
      สิ่งอำนวยความสะดวก: "ร้านอาหาร, ร้านของที่ระลึก",
    },
    images: [
      "images/sriracha-tiger-zoo.jpg",
      "images/tiger-1.jpg",
      "images/tiger-2.jpg",
      "images/tiger-3.jpg",
    ],
  },
};

// Modal Functions
function openBeachModal(beachId) {
  const beach = beachData[beachId];
  if (!beach) return;

  document.getElementById("beachTitle").textContent = beach.title;
  document.getElementById("beachDescription").textContent = beach.description;
  document.getElementById("beachMainImage").src = beach.images[0];
  document.getElementById("beachMainImage").alt = beach.title;

  const activitiesList = document.getElementById("beachActivities");
  activitiesList.innerHTML = "";
  beach.activities.forEach((activity) => {
    const li = document.createElement("li");
    li.textContent = activity;
    activitiesList.appendChild(li);
  });

  const infoGrid = document.getElementById("beachInfo");
  infoGrid.innerHTML = "";
  Object.entries(beach.info).forEach(([key, value]) => {
    const infoItem = document.createElement("div");
    infoItem.className = "info-item";
    infoItem.innerHTML = `<strong>${key}:</strong> ${value}`;
    infoGrid.appendChild(infoItem);
  });

  const mapContainer = document.getElementById("map-container");
  mapContainer.innerHTML = ""; // ล้างแผนที่เก่าออกก่อน

  if (beach.mapEmbedUrl) {
    const iframe = document.createElement("iframe");
    iframe.src = beach.mapEmbedUrl;
    iframe.setAttribute("allowfullscreen", "");
    iframe.setAttribute("loading", "lazy");
    iframe.setAttribute("referrerpolicy", "no-referrer-when-downgrade");
    mapContainer.appendChild(iframe);
  }

  const thumbnailsContainer = document.getElementById("beachThumbnails");
  thumbnailsContainer.innerHTML = "";
  beach.images.forEach((image, index) => {
    const thumbnail = document.createElement("div");
    thumbnail.className = `thumbnail ${index === 0 ? "active" : ""}`;
    thumbnail.innerHTML = `<img src="${image}" alt="${beach.title} ${
      index + 1
    }">`;
    thumbnail.onclick = () => changeMainImage("beach", image, thumbnail);
    thumbnailsContainer.appendChild(thumbnail);
  });

  // --- แสดง Modal ---
  document.getElementById("beachModal").style.display = "block";
  document.body.style.overflow = "hidden";
}

function openAttractionModal(attractionId) {
  const attraction = attractionData[attractionId];
  if (!attraction) return;

  document.getElementById("attractionTitle").textContent = attraction.title;
  document.getElementById("attractionDescription").textContent =
    attraction.description;
  document.getElementById("attractionMainImage").src = attraction.images[0];
  document.getElementById("attractionMainImage").alt = attraction.title;

  // Highlights
  const highlightsList = document.getElementById("attractionHighlights");
  highlightsList.innerHTML = "";
  attraction.highlights.forEach((highlight) => {
    const li = document.createElement("li");
    li.textContent = highlight;
    highlightsList.appendChild(li);
  });

  // Info
  const infoGrid = document.getElementById("attractionInfo");
  infoGrid.innerHTML = "";
  Object.entries(attraction.info).forEach(([key, value]) => {
    const infoItem = document.createElement("div");
    infoItem.className = "info-item";
    infoItem.innerHTML = `<strong>${key}:</strong> ${value}`;
    infoGrid.appendChild(infoItem);
  });

  // Thumbnails
  const thumbnailsContainer = document.getElementById("attractionThumbnails");
  thumbnailsContainer.innerHTML = "";
  attraction.images.forEach((image, index) => {
    const thumbnail = document.createElement("div");
    thumbnail.className = `thumbnail ${index === 0 ? "active" : ""}`;
    thumbnail.innerHTML = `<img src="${image}" alt="${attraction.title} ${
      index + 1
    }">`;
    thumbnail.onclick = () => changeMainImage("attraction", image, thumbnail);
    thumbnailsContainer.appendChild(thumbnail);
  });

  document.getElementById("attractionModal").style.display = "block";
  document.body.style.overflow = "hidden";
}

function changeMainImage(type, imageSrc, clickedThumbnail) {
  const mainImage = document.getElementById(type + "MainImage");
  mainImage.src = imageSrc;

  // Update active thumbnail
  const thumbnails =
    clickedThumbnail.parentElement.querySelectorAll(".thumbnail");
  thumbnails.forEach((thumb) => thumb.classList.remove("active"));
  clickedThumbnail.classList.add("active");
}

function closeModal(modalId) {
  document.getElementById(modalId).style.display = "none";
  document.body.style.overflow = "auto";
}

// Close modal when clicking outside
window.onclick = (event) => {
  const beachModal = document.getElementById("beachModal");
  const attractionModal = document.getElementById("attractionModal");

  if (event.target === beachModal) {
    closeModal("beachModal");
  }
  if (event.target === attractionModal) {
    closeModal("attractionModal");
  }
};

// Close modal with Escape key
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeModal("beachModal");
    closeModal("attractionModal");
  }
});
