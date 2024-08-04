# MyShop

MyShop là một trang web bán hàng online chuyên nghiệp được xây dựng bằng Django.

## Các tính năng chính

- Đăng ký/Đăng nhập người dùng
- Tìm kiếm và lọc sản phẩm
- Giỏ hàng và thanh toán trực tuyến
- Quản lý đơn hàng
- Đánh giá và nhận xét sản phẩm
- Tích hợp các phương thức thanh toán

## Yêu cầu hệ thống

- Python 3.8+
- Django 3.2+
- SQLite (hoặc cơ sở dữ liệu khác)

## Cài đặt

1. Clone repository này về máy của bạn:

    ```bash
    git clone https://github.com/haiprotn/myshop.git
    cd myshop
    ```

2. Tạo và kích hoạt virtual environment:

    ```bash
    python -m venv venv
    source venv/bin/activate  # Trên Windows: venv\Scripts\activate
    ```

3. Cài đặt các gói phụ thuộc:

    ```bash
    pip install -r requirements.txt
    ```

4. Thực hiện migration cho cơ sở dữ liệu:

    ```bash
    python manage.py migrate
    ```

5. Tạo tài khoản admin:

    ```bash
    python manage.py createsuperuser
    ```

6. Chạy server:

    ```bash
    python manage.py runserver
    ```

Truy cập trang web tại `http://127.0.0.1:8000/` để xem dự án.

## Cấu trúc thư mục

```plaintext
myshop/
├── manage.py
├── myshop/
│   ├── __init__.py
│   ├── settings.py
│   ├── urls.py
│   ├── wsgi.py
│   └── asgi.py
├── shop/
│   ├── migrations/
│   ├── __init__.py
│   ├── admin.py
│   ├── apps.py
│   ├── models.py
│   ├── tests.py
│   ├── views.py
│   └── urls.py
├── static/
├── templates/
│   ├── base.html
│   └── shop/
│       ├── product/
│       │   ├── list.html
│       │   └── detail.html
└── README.md
