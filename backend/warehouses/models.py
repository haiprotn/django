from django.db import models
from products.models import Product

class Warehouse(models.Model):
    name = models.CharField(max_length=255)
    location = models.TextField()

    def __str__(self):
        return self.name

class StockEntry(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    warehouse = models.ForeignKey(Warehouse, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField()
    entry_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"StockEntry {self.id} - {self.product.name}"
