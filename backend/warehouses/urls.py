# warehouses/urls.py
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import WarehouseViewSet, StockEntryViewSet

router = DefaultRouter()
router.register(r'warehouses', WarehouseViewSet)
router.register(r'stock-entries', StockEntryViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
