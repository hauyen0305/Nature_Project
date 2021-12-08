HƯỚNG DẪN THỰC HÀNH LÀM PROJECT HTML-CSS

- Website chia sẻ mẫu giao diện:
+ https://themehunt.com/
+ https://themeforest.com/

- Cấu trúc files, thư mục:

+ css: thư mục chứa các file css
++ style.css: file css chính của dự án
++ grid.css: file chứa code grid system (nên sử dụng flex)
++ reset.css: file chứa code reset css
++ base.css: file chứa các style mặc định ban đầu của project
++ responsive.css: file chứa style responsive (Media queries)
++ animate.min.css: file thư viện animate css (Download từ trang chủ thư viện)
++ all.min.css: file thư viện font-awesome 5 (Download từ trang chủ thư viện)

+ font: thư mục chưa fonts của dự án, fonts của thư viện font-awesome 
+ images: thư mục chưa các file ảnh
+ js: thư mục chưa các file javascript
+ index.html: file chạy trình của dự án (Trang chủ)
+ category.html: file trang chuyên mục
+ blog.html: file trang blog
-------------------------------------
- Chuẩn bị các công cụ cần thiết:

+ Pick màu: Color Zilla Extension
+ Tìm tên Fonts: What Fonts Extension
+ Đo kích thước: Page Ruler Redux Extension
+ VisBug

-------------------------------------
- Thư viện tạo slide ảnh (Carousel)
+ Search từ khóa: "carousel jquery"
+ Sử dụng Owl Carousel 2: https://owlcarousel2.github.io/OwlCarousel2/ (dùng cho slide 1 dòng)
+ Các bước cài đặt như sau:
1.1 giải nén --> click vào --> chọn dist --> chọn assets --> sao chép 2 file "owl.carousel.min.css" và "owl.theme.defaul.min.css" --> bỏ vào thư mục css
1.2 click vào file đã giải nén --> chọn dist --> sao chép file "owl.carousel.min.css" --> bỏ vào thư mục js
1.3 - Thêm trong đoạn <head> 2 link sau:
	<link rel="stylesheet" href="css/owl.carousel.min.css">
	<link rel="stylesheet" href="css/owl.theme.default.min.css">
	- Thêm trong đoạn <body> link sau:
	<script type="text/javascript" src="js/owl.carousel.min.js"></script>
	1.4 - Search từ khóa "jquery" download file về bằng cách bấm ctrl + S
	- Thêm trong đoạn body link sau:
	<script type="text/javascript" src="js/jquery-3.6.0.min.js"></script>

+ Slick: https://kenwheeler.github.io/slick/ 
--------------------------------------------
Vào đường link dưới đây để tìm icons đẹp cho favicon:
https://icons8.com/icons