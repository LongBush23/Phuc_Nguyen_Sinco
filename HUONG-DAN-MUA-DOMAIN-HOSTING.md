# 🌐 Hướng Dẫn Mua Tên Miền & Hosting (300-400K VNĐ)

## 💰 So Sánh Các Gói Phổ Biến (Năm 2026)

### Option 1: HOSTINGER ⭐ KHUYẾN NGHỊ
**Gói Single Web Hosting**
- 💵 **Giá:** 39,000 VNĐ/tháng × 12 = **468,000 VNĐ/năm** (thường có giảm 70-80%)
- 💵 **Giá khuyến mãi:** ~**150,000 VNĐ/năm đầu**
- ✅ Domain .com miễn phí năm đầu
- ✅ 100 GB SSD storage
- ✅ SSL miễn phí (HTTPS)
- ✅ Email miễn phí (contact@domain.com)
- ✅ 1 website
- ✅ Bandwidth không giới hạn
- ✅ Panel dễ dùng (hPanel)
- 🌐 Link: https://www.hostinger.vn/

**Tổng chi phí năm đầu: ~150-200K VNĐ** ✅

---

### Option 2: AZDIGI (Hosting Việt Nam)
**Gói AZ Simple**
- 💵 **Giá:** 290,000 VNĐ/năm
- 📧 Domain .com.vn miễn phí (hoặc mua thêm .com ~250K)
- ✅ 5 GB SSD
- ✅ SSL miễn phí
- ✅ Email hosting
- ✅ cPanel
- ✅ Hỗ trợ tiếng Việt 24/7
- 🌐 Link: https://azdigi.com/

**Tổng: 290K (domain .com.vn) hoặc 540K (domain .com)** ⚠️ Hơi vượt budget

---

### Option 3: MẮT BẢO (Mat Bao)
**Gói Starter**
- 💵 **Giá:** ~300,000 VNĐ/năm
- 📧 Domain .com.vn miễn phí
- ✅ 2 GB SSD
- ✅ SSL miễn phí
- ✅ DirectAdmin panel
- ✅ Hỗ trợ Việt Nam
- 🌐 Link: https://matbao.net/

**Tổng: 300K** ✅

---

### Option 4: PA VIETNAM
**Gói Mini**
- 💵 **Giá:** 200,000 VNĐ/năm
- ✅ 2 GB SSD
- ✅ SSL miễn phí
- ⚠️ Domain mua riêng (~250K cho .com)
- 🌐 Link: https://pavietnam.vn/

**Tổng: 450K** ⚠️ Hơi vượt budget

---

### Option 5: ⚡ CHỈ MUA DOMAIN - DÙNG GITHUB PAGES (FREE HOSTING)
**Khuyến nghị nếu muốn tiết kiệm nhất!**

- 💵 **Giá domain .com:** 250,000 VNĐ/năm
- 💵 **Hosting:** 0 VNĐ (GitHub Pages miễn phí)
- ✅ Tốc độ nhanh (CDN toàn cầu)
- ✅ Uptime 99.9%
- ✅ SSL tự động
- ✅ Không giới hạn băng thông
- ⚠️ Chỉ hosting static HTML/CSS/JS (phù hợp với website hiện tại)

**Nơi mua domain giá tốt:**
- **Tên Miền Việt:** https://tenmien.vn/ (~250K/năm)
- **PA Vietnam:** https://pavietnam.vn/ (~250K/năm)
- **Mắt Bảo:** https://matbao.net/ (~250K/năm)
- **Nhân Hòa:** https://nhanhoa.com/ (~250K/năm)

**Tổng: 250K/năm** ✅ RẺ NHẤT

---

## 🎯 KHUYẾN NGHỊ CHO BẠN

### Lựa chọn tốt nhất: **OPTION 5 - Domain + GitHub Pages**
**Lý do:**
1. ✅ **Rẻ nhất:** Chỉ 250K/năm cho domain
2. ✅ **Website hiện tại là static HTML** - phù hợp hoàn toàn với GitHub Pages
3. ✅ **Không cần quản lý hosting** - GitHub lo hết
4. ✅ **Tốc độ nhanh** - CDN toàn cầu
5. ✅ **SSL miễn phí** - HTTPS tự động
6. ✅ **Uptime cao** - 99.9% (tốt hơn nhiều hosting giá rẻ)

**Nếu trong tương lai cần thêm:**
- Muốn có backend (PHP, database) → Nâng cấp lên hosting lúc đó
- Hiện tại website chỉ cần HTML/CSS/JS → GitHub Pages là đủ!

---

## 📝 HƯỚNG DẪN MUA DOMAIN VÀ TRỎ VỀ GITHUB PAGES

### Bước 1: Mua Domain (Ví dụ: Tên Miền Việt)

1. **Truy cập:** https://tenmien.vn/
2. **Tìm tên miền:**
   - Gõ tên muốn đăng ký: `phucnguyensinco.com`
   - Kiểm tra còn trống không
3. **Chọn gói:**
   - Domain .com: ~250,000 VNĐ/năm
   - Domain .vn: ~400,000 VNĐ/năm
   - Domain .com.vn: ~350,000 VNĐ/năm
4. **Thanh toán:**
   - Bank transfer / Momo / ZaloPay
   - Thẻ Visa/Mastercard
5. **Xác nhận email** và **đăng nhập quản trị**

### Bước 2: Cấu Hình DNS Trỏ Về GitHub Pages

**2.1. Vào quản lý DNS của domain:**
- Login vào tài khoản Tên Miền Việt (hoặc nhà cung cấp bạn chọn)
- Vào phần "Quản lý DNS" hoặc "DNS Management"

**2.2. Thêm các DNS records:**

**A. Xóa hết các record cũ (nếu có)**

**B. Thêm 4 A records trỏ đến GitHub Pages:**
```
Type: A
Host: @
Value: 185.199.108.153
TTL: 3600

Type: A
Host: @
Value: 185.199.109.153
TTL: 3600

Type: A
Host: @
Value: 185.199.110.153
TTL: 3600

Type: A
Host: @
Value: 185.199.111.153
TTL: 3600
```

**C. Thêm CNAME record cho www:**
```
Type: CNAME
Host: www
Value: longbush23.github.io
TTL: 3600
```

**D. (Khuyến nghị) Thêm CAA record cho SSL:**
```
Type: CAA
Host: @
Value: 0 issue "letsencrypt.org"
TTL: 3600
```

**Lưu lại!**

---

### Bước 3: Cấu Hình GitHub Repository

**3.1. Tạo file CNAME trong project:**

```bash
cd /Users/nguyenlong/Desktop/Chú\ Phúc/tea-station-main
echo "phucnguyensinco.com" > CNAME
git add CNAME
git commit -m "Add custom domain"
git push
```

**3.2. Cấu hình GitHub Pages:**
1. Vào repository: https://github.com/LongBush23/Phuc_Nguyen_Sinco
2. Settings → Pages
3. **Custom domain:** Nhập `phucnguyensinco.com`
4. Click "Save"
5. ✅ Chọn "Enforce HTTPS" (sau 5-10 phút)

---

### Bước 4: Cập Nhật Code

**4.1. Thay URL trong tất cả files:**

**File: index.html** (tìm và thay):
```html
Tìm: https://longbush23.github.io/Phuc_Nguyen_Sinco/
Thay: https://phucnguyensinco.com/
```
(~6 chỗ trong meta tags và JSON-LD)

**File: sitemap.xml:**
```xml
Tìm: https://longbush23.github.io/Phuc_Nguyen_Sinco/
Thay: https://phucnguyensinco.com/
```

**File: robots.txt:**
```
Sitemap: https://phucnguyensinco.com/sitemap.xml
```

**File: SEO-HUONG-DAN.md, README.md:**
Cập nhật link demo

**4.2. Commit và push:**
```bash
git add -A
git commit -m "Update URLs to custom domain"
git push
```

---

### Bước 5: Kiểm Tra và Đợi

**Timeline:**
- ⏰ **0 phút:** Cấu hình DNS xong
- ⏰ **10-30 phút:** DNS propagation (lan truyền)
- ⏰ **30-60 phút:** GitHub phát hiện domain mới
- ⏰ **1-24 giờ:** SSL certificate tự động được cấp
- ✅ **Sau 24 giờ:** Website hoạt động 100%

**Kiểm tra DNS đã trỏ chưa:**
```bash
# Mở Terminal
nslookup phucnguyensinco.com

# Nếu thấy:
# 185.199.108.153
# 185.199.109.153
# → DNS đã OK!
```

**Kiểm tra website:**
- http://phucnguyensinco.com (HTTP - hoạt động ngay)
- https://phucnguyensinco.com (HTTPS - cần đợi SSL 1-24h)

---

## 🔧 XỬ LÝ LỖI THƯỜNG GẶP

### Lỗi 1: "Domain không tìm thấy" (DNS_PROBE_FINISHED_NXDOMAIN)
**Nguyên nhân:** DNS chưa propagate
**Cách fix:** Đợi thêm 30-60 phút

### Lỗi 2: "Không an toàn" / "Not Secure" (no HTTPS)
**Nguyên nhân:** SSL chưa được cấp
**Cách fix:** 
- Đợi 24h
- Đảm bảo đã tick "Enforce HTTPS" trong GitHub Settings

### Lỗi 3: GitHub Pages không nhận domain
**Nguyên nhân:** File CNAME chưa đúng
**Cách fix:**
```bash
# File CNAME chỉ chứa 1 dòng, không có http://, không có /
echo "phucnguyensinco.com" > CNAME
```

### Lỗi 4: www.phucnguyensinco.com không hoạt động
**Nguyên nhân:** Thiếu CNAME record cho www
**Cách fix:** Thêm CNAME record:
```
Type: CNAME
Host: www
Value: longbush23.github.io
```

---

## ✅ CHECKLIST SAU KHI MUA DOMAIN

### Ngay sau khi mua:
- [ ] Domain đã thanh toán thành công
- [ ] Nhận email xác nhận từ nhà cung cấp
- [ ] Đăng nhập được vào quản trị domain

### Cấu hình DNS (Ngày 1):
- [ ] Thêm 4 A records (185.199.108/109/110/111.153)
- [ ] Thêm CNAME record cho www
- [ ] Lưu thay đổi DNS

### Cấu hình GitHub (Ngày 1):
- [ ] Tạo file CNAME trong project
- [ ] Push code lên GitHub
- [ ] Vào Settings → Pages → nhập custom domain
- [ ] Save

### Cập nhật code (Ngày 1):
- [ ] Thay URL trong index.html (6 chỗ)
- [ ] Thay URL trong sitemap.xml (8+ chỗ)
- [ ] Thay URL trong robots.txt
- [ ] Cập nhật README.md
- [ ] Commit và push

### Đợi DNS propagate (10-60 phút):
- [ ] Test: `nslookup phucnguyensinco.com`
- [ ] Mở http://phucnguyensinco.com (HTTP)
- [ ] Kiểm tra hiển thị đúng

### Đợi SSL (1-24 giờ):
- [ ] Vào GitHub Settings → Pages
- [ ] Tick "Enforce HTTPS"
- [ ] Đợi certificate
- [ ] Test: https://phucnguyensinco.com

### SEO (Sau 24 giờ):
- [ ] Submit lên Google Search Console
- [ ] Submit sitemap.xml
- [ ] Submit lên Bing Webmaster
- [ ] Tạo Google Business Profile
- [ ] Thêm Google Analytics

---

## 💡 GỢI Ý TÊN MIỀN

**Tên miền tốt cho SEO:**
- ✅ `phucnguyensinco.com` (chính xác, dễ nhớ)
- ✅ `phucnguyensinco.vn` (domain Việt Nam, tin tưởng)
- ✅ `sinco.vn` (ngắn gọn nếu còn trống)
- ✅ `pnsinco.com` (viết tắt, dễ gõ)

**Tên miền không nên dùng:**
- ❌ Tên có dấu gạch nối: `phuc-nguyen-sinco.com` (khó nhớ)
- ❌ Tên quá dài: `phucnguyensinco-thietbibangtai.com`
- ❌ Domain lạ: `.xyz`, `.info`, `.biz` (kém uy tín)

**Kiểm tra tên miền còn trống:**
- https://tenmien.vn/
- https://www.godaddy.com/
- https://www.namecheap.com/

---

## 📊 SO SÁNH: GITHUB PAGES vs HOSTING THƯỜNG

| Tiêu chí | GitHub Pages (Khuyến nghị) | Hosting ~300K |
|----------|----------------------------|---------------|
| **Giá/năm** | 0 VNĐ | 300-400K VNĐ |
| **Tốc độ** | ⚡⚡⚡ Rất nhanh (CDN toàn cầu) | ⚡⚡ Tùy server |
| **Uptime** | 99.9% | 95-98% (hosting rẻ) |
| **SSL** | Miễn phí tự động | Miễn phí (Let's Encrypt) |
| **Băng thông** | Không giới hạn | Giới hạn (50-100GB/tháng) |
| **Email** | ❌ Không có | ✅ Có (contact@domain.com) |
| **Backend** | ❌ Chỉ static HTML/JS | ✅ PHP, MySQL, Node.js |
| **Quản lý** | ✅ Đơn giản (Git push) | cPanel/DirectAdmin |
| **Phù hợp** | ✅ Website này (static) | Website động, blog WordPress |

**Kết luận:** Với website hiện tại (static HTML), **GitHub Pages + Domain riêng** là lựa chọn tối ưu nhất!

---

## 📞 HỖ TRỢ

**Nếu gặp khó khăn trong quá trình:**
1. Group/Forum hỗ trợ: https://facebook.com/groups/webdevelopervietnam
2. Video hướng dẫn: Search "cách trỏ domain về GitHub Pages" trên YouTube
3. Docs chính thức: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site

**Contact:**
- Phone: 0908893082
- Email: sincopn@gmail.com

---

## 🎉 TÓM TẮT

**KHUYẾN NGHỊ:** Chỉ mua **domain .com** (~250K VNĐ/năm) + dùng **GitHub Pages miễn phí**

**Ưu điểm:**
- ✅ Rẻ nhất (250K vs 400K)
- ✅ Nhanh nhất (CDN toàn cầu)
- ✅ Ổn định nhất (GitHub infrastructure)
- ✅ Đơn giản (không cần quản lý hosting)
- ✅ SSL tự động
- ✅ Phù hợp với website static này

**Các bước:**
1. Mua domain tại Tên Miền Việt / PA Vietnam (~250K)
2. Cấu hình DNS trỏ về GitHub (4 A records + 1 CNAME)
3. Tạo file CNAME trong project
4. Cập nhật URLs trong code
5. Đợi 24h → Website lên domain chính thức!

**Nếu cần thêm email hoặc backend sau này → Nâng cấp lên hosting lúc đó!**
