# warehouses/views.py
from rest_framework import viewsets
from .models import Warehouse, StockEntry
from .serializers import WarehouseSerializer, StockEntrySerializer

class WarehouseViewSet(viewsets.ModelViewSet):
    queryset = Warehouse.objects.all()
    serializer_class = WarehouseSerializer

class StockEntryViewSet(viewsets.ModelViewSet):
    queryset = StockEntry.objects.all()
    serializer_class = StockEntrySerializer
