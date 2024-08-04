from django.contrib import admin
from django.urls import path, include

# Cấu hình URL cho admin và API
urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/products', include('products.urls')),
    path('api/customers/', include('customers.urls')),
    path('api/orders/', include('orders.urls')),
    path('api/warehouses/', include('warehouses.urls')),
    path('api/debts/', include('debts.urls')),
]
