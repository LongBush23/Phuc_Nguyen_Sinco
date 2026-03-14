# Hướng Dẫn SEO Cho Website Phúc Nguyễn Sinco

## ✅ Đã Tối Ưu SEO Hoàn Chỉnh

### 1. Meta Tags Cơ Bản

- ✅ Title tag tối ưu (60-70 ký tự)
- ✅ Meta description (150-160 ký tự)
- ✅ Meta keywords với từ khóa chính
- ✅ Canonical URL
- ✅ Robots meta
- ✅ Language tags (lang="vi")
- ✅ Theme color
- ✅ Author meta

### 2. Social Media Tags

- ✅ Open Graph tags (Facebook, LinkedIn)
- ✅ Twitter Card tags
- ✅ OG:image (1200x630px khuyến nghị)
- ✅ Social sharing tối ưu

### 3. Structured Data (Schema.org)

- ✅ LocalBusiness schema
- ✅ Product schema (2 sản phẩm)
- ✅ Organization schema
- ✅ Aggregate ratings
- ✅ Offers with pricing

### 4. Technical SEO

- ✅ Semantic HTML5
- ✅ robots.txt
- ✅ sitemap.xml (images + videos)
- ✅ Mobile-responsive
- ✅ Fast loading (CDN)
- ✅ HTTPS ready

### 5. Performance Hints

- ✅ Preconnect CDN
- ✅ DNS prefetch fonts
- ✅ Resource hints

---

## 🚀 Khi Mua Tên Miền Mới - CẦN THAY ĐỔI

### Bước 1: Thay URL trong index.html

Tìm và thay tất cả:

```
https://longbush23.github.io/Phuc_Nguyen_Sinco/
```

Thành:

```
https://ten-mien-moi.com/
```

**Các vị trí cần sửa:**

- Line ~18: `<link rel="canonical">`
- Line ~21: `<meta property="og:url">`
- Line ~30: `<meta name="twitter:url">`
- Line ~53-145: Tất cả JSON-LD schema (6 chỗ)

### Bước 2: Cập nhật sitemap.xml

Thay tất cả URL trong file `sitemap.xml`:

```xml
<loc>https://ten-mien-moi.com/</loc>
```

### Bước 3: Cập nhật robots.txt

Sửa dòng Sitemap:

```
Sitemap: https://ten-mien-moi.com/sitemap.xml
```

### Bước 4: Google Search Console

1. Truy cập: https://search.google.com/search-console
2. Thêm property mới với domain mới
3. Xác thực quyền sở hữu (HTML file hoặc DNS)
4. Submit sitemap: `https://ten-mien-moi.com/sitemap.xml`

### Bước 5: Google Business Profile

1. Tạo/cập nhật: https://business.google.com/
2. Điền đầy đủ:
   - Tên: Phúc Nguyễn Sinco
   - Địa chỉ: Quốc Lộ 1A, Ấp 3, Bình Dương
   - Điện thoại: 0908893082
   - Website: domain mới
   - Giờ mở cửa: 08:00-18:00
3. Upload ảnh sản phẩm
4. Thêm bài đăng thường xuyên

### Bước 6: Analytics & Tracking

```html
<!-- Thêm vào <head> của index.html -->

<!-- Google Analytics 4 -->
<script
  async
  src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag("js", new Date());
  gtag("config", "G-XXXXXXXXXX");
</script>

<!-- Facebook Pixel (optional) -->
<script>
  !(function (f, b, e, v, n, t, s) {
    if (f.fbq) return;
    n = f.fbq = function () {
      n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
    };
    if (!f._fbq) f._fbq = n;
    n.push = n;
    n.loaded = !0;
    n.version = "2.0";
    n.queue = [];
    t = b.createElement(e);
    t.async = !0;
    t.src = v;
    s = b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t, s);
  })(
    window,
    document,
    "script",
    "https://connect.facebook.net/en_US/fbevents.js",
  );
  fbq("init", "YOUR_PIXEL_ID");
  fbq("track", "PageView");
</script>
```

---

## 📈 Checklist Sau Khi Deploy

### Ngay Lập Tức

- [ ] Kiểm tra robots.txt: `https://ten-mien-moi.com/robots.txt`
- [ ] Kiểm tra sitemap: `https://ten-mien-moi.com/sitemap.xml`
- [ ] Test meta tags: https://metatags.io/
- [ ] Test Open Graph: https://developers.facebook.com/tools/debug/
- [ ] Test Twitter Cards: https://cards-dev.twitter.com/validator
- [ ] Test Structured Data: https://search.google.com/test/rich-results
- [ ] Test mobile: https://search.google.com/test/mobile-friendly
- [ ] Test speed: https://pagespeed.web.dev/

### Tuần Đầu

- [ ] Submit sitemap lên Google Search Console
- [ ] Submit lên Bing Webmaster Tools
- [ ] Tạo Google Business Profile
- [ ] Tạo Facebook Business Page
- [ ] Backlink từ các directory Việt Nam

### Hàng Tháng

- [ ] Kiểm tra Google Search Console (impressions, clicks, CTR)
- [ ] Cập nhật lastmod trong sitemap.xml
- [ ] Thêm blog posts (nếu có)
- [ ] Cập nhật giá sản phẩm trong schema
- [ ] Resubmit sitemap

---

## 🎯 Từ Khóa Chính Đã Tối Ưu

1. **Primary:**
   - bộ đếm sản phẩm băng tải
   - bánh xe con lăn HDPE
   - thiết bị băng tải công nghiệp

2. **Secondary:**
   - cảm biến đếm Omron
   - roller HDPE logistics
   - phụ kiện băng tải
   - thang lăn máng lăn

3. **Long-tail:**
   - bộ đếm sản phẩm băng tải giá rẻ
   - bánh xe con lăn HDPE 49mm
   - thiết bị đếm sản phẩm chính xác

---

## 📊 Dự Đoán SEO Score

Với tối ưu hiện tại:

- **SEOQuake Score:** 85-95/100
- **Google PageSpeed:** 90+/100
- **Mobile Usability:** 100/100
- **Structured Data:** Valid
- **Social Ready:** Yes

---

## 🔧 Tools Hữu Ích

### SEO Checking

- https://seoquake.com/ (Chrome extension)
- https://search.google.com/search-console
- https://www.bing.com/webmasters

### Analytics

- https://analytics.google.com/
- https://clarity.microsoft.com/ (free heatmaps)

### Performance

- https://pagespeed.web.dev/
- https://gtmetrix.com/

### Schema Testing

- https://validator.schema.org/
- https://search.google.com/test/rich-results

---

## 📞 Liên Hệ Khi Deploy

- Phone: 0908893082
- Email: sincopn@gmail.com
- Current site: https://longbush23.github.io/Phuc_Nguyen_Sinco/

**Lưu ý:** Nhớ backup toàn bộ code trước khi thay đổi!
