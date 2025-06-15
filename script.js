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
      เวลาเดินทาง: "1.5-2 ชั่วโมง",
      ค่าเข้าชม: "ฟรี",
      เวลาเปิด: "24 ชั่วโมง",
      ที่จอดรถ: "มีบริการ",
      สิ่งอำนวยความสะดวก: "ห้องน้ำ, ร้านอาหาร, ที่พัก",
    },
    images: [
      "images/pattaya-beach.jpg",
      "images/pattaya-1.jpg",
      "images/pattaya-2.jpg",
      "images/pattaya-3.jpg",
    ],
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
      "images/bangsaen-beach.jpg",
      "images/bangsaen-1.jpg",
      "images/bangsaen-2.jpg",
      "images/bangsaen-3.jpg",
    ],
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
      เวลาเปิด: "6:00-18:00 น.",
      สิ่งอำนวยความสะดวก: "ห้องน้ำ, ร้านอาหาร, เช่าอุปกรณ์",
    },
    images: [
      "images/koh-larn.jpg",
      "images/kohlarn-1.jpg",
      "images/kohlarn-2.jpg",
      "images/kohlarn-3.jpg",
    ],
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
      "images/jomtien-beach.jpg",
      "images/jomtien-1.jpg",
      "images/jomtien-2.jpg",
      "images/jomtien-3.jpg",
    ],
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

  // Activities
  const activitiesList = document.getElementById("beachActivities");
  activitiesList.innerHTML = "";
  beach.activities.forEach((activity) => {
    const li = document.createElement("li");
    li.textContent = activity;
    activitiesList.appendChild(li);
  });

  // Info
  const infoGrid = document.getElementById("beachInfo");
  infoGrid.innerHTML = "";
  Object.entries(beach.info).forEach(([key, value]) => {
    const infoItem = document.createElement("div");
    infoItem.className = "info-item";
    infoItem.innerHTML = `<strong>${key}:</strong> ${value}`;
    infoGrid.appendChild(infoItem);
  });

  // Thumbnails
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
