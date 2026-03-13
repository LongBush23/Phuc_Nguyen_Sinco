document.addEventListener("DOMContentLoaded", () => {
  // ===== Intersection Observer for Reveal Animations =====
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("active");
      });
    },
    { threshold: 0.15 },
  );
  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

  // ===== Mobile Hamburger Menu =====
  const menuToggle = document.getElementById("menu-toggle");
  const mobileNav = document.getElementById("mobile-nav");
  if (menuToggle && mobileNav) {
    menuToggle.addEventListener("click", () => {
      const isOpen = !mobileNav.classList.contains("hidden");
      mobileNav.classList.toggle("hidden");
      menuToggle.querySelector("span").textContent = isOpen ? "menu" : "close";
    });
  }
});

// ===== Product Specs Data =====
const PRODUCT_DATA = {
  counter: {
    title: "Bộ Đếm Sản Phẩm Băng Tải",
    subtitle: "Đếm chính xác đến từng sản phẩm — không bỏ sót",
    images: [
      "assets/counter/1.jpeg",
      "assets/counter/2.jpeg",
      "assets/counter/3.jpeg",
      "assets/counter/4.jpeg",
      "assets/53367e30-c2ef-4127-8aae-a12725c3ea6d.jpeg",
      "assets/b6db6d65-9553-47ad-95ad-bd542e5cc060.jpeg",
    ],
    video: null,
    specs: [
      ["Nguồn cấp", "12VDC"],
      ["Kích thước", "430 × 190 mm"],
      ["Hiển thị", "04 LED 7 đoạn, 4 inch, độ sáng cao"],
      ["Dải đếm", "0 – 9999 sản phẩm"],
      ["Cảm biến", "Quang Omron — chính xác, ổn định công nghiệp"],
      ["Chức năng", "Nút SET 0, nút trả ngược hiệu chỉnh"],
      ["Chống nhiễu", "Cài đặt thời gian nhận dạng theo tốc độ băng tải"],
      [
        "Ứng dụng",
        "Đếm sản phẩm trên băng tải, dây chuyền đóng gói, kiểm đếm hàng hóa",
      ],
      ["Giá tham khảo", "3.500.000 VNĐ / bộ"],
    ],
  },
  roller: {
    title: "Bánh Xe Con Lăn Nhựa HDPE",
    subtitle: "Vận hành êm ái — bền bỉ trong logistics",
    images: [
      "assets/roller/1.jpeg",
      "assets/roller/2.jpeg",
      "assets/roller/specs.jpeg",
    ],
    video: null,
    specs: [
      ["Chất liệu", "Nhựa HDPE chính phẩm, chịu mài mòn tốt"],
      ["Đường kính ngoài", "49 mm"],
      ["Đường kính lỗ cốt", "10 mm"],
      ["Chiều dày bánh", "23 mm"],
      ["Đặc tính", "Ma sát thấp, vận hành êm, ít hao mòn, tuổi thọ cao"],
      ["Chịu tải", "Hàng hóa nhẹ đến trung bình"],
      [
        "Ứng dụng",
        "Thang lăn / máng lăn — kho hàng, bưu kiện, thùng carton, logistics",
      ],
      [
        "Giá tham khảo",
        "2.500 VNĐ/con (≥1000 con) · 3.000 VNĐ/con (<1000 con)",
      ],
    ],
  },
};

// ===== Modal Functions =====
function openSpecsModal(productKey) {
  const data = PRODUCT_DATA[productKey];
  if (!data) return;

  document.getElementById("modal-title").textContent = data.title;
  document.getElementById("modal-subtitle").textContent = data.subtitle;

  // Main image
  const mainImg = document.getElementById("modal-main-img");
  mainImg.src = data.images[0];
  mainImg.alt = data.title;

  // Thumbnails
  const thumbContainer = document.getElementById("modal-thumbnails");
  thumbContainer.innerHTML = data.images
    .map(
      (src, i) =>
        `<button class="gallery-thumb flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 ${i === 0 ? "active" : ""}" onclick="selectThumb(this, '${src.replace(/'/g, "\\'")}')">
          <img src="${src}" alt="Ảnh ${i + 1}" class="w-full h-full object-cover rounded-lg" />
        </button>`,
    )
    .join("");

  // Video section hidden (videos now on main page)
  const videoSection = document.getElementById("modal-video-section");
  if (videoSection) videoSection.classList.add("hidden");

  // Specs table
  document.getElementById("modal-specs").innerHTML = data.specs
    .map(([label, value]) => `<tr><td>${label}</td><td>${value}</td></tr>`)
    .join("");

  // Open modal
  document.getElementById("specs-modal").classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeSpecsModal() {
  document.getElementById("specs-modal").classList.remove("open");
  document.body.style.overflow = "";
  // Stop video if playing
  const videoEl = document.getElementById("modal-video");
  videoEl.pause();
  videoEl.src = "";
}

function selectThumb(btn, src) {
  document
    .querySelectorAll(".gallery-thumb")
    .forEach((t) => t.classList.remove("active"));
  btn.classList.add("active");
  document.getElementById("modal-main-img").src = src;
}

// Close modal on Escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeSpecsModal();
});

// ===== Close Mobile Nav =====
function closeMobileNav() {
  const mobileNav = document.getElementById("mobile-nav");
  const menuToggle = document.getElementById("menu-toggle");
  if (mobileNav) mobileNav.classList.add("hidden");
  if (menuToggle) menuToggle.querySelector("span").textContent = "menu";
}
