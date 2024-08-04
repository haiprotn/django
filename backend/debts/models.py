from django.db import models
from customers.models import Customer
from orders.models import Order

class Debt(models.Model):
    customer = models.ForeignKey(Customer, on_delete=models.CASCADE)
    order = models.ForeignKey(Order, on_delete=models.CASCADE)
    amount_due = models.DecimalField(max_digits=10, decimal_places=2)
    amount_paid = models.DecimalField(max_digits=10, decimal_places=2)
    due_date = models.DateTimeField()

    def __str__(self):
        return f"Debt {self.id} - {self.customer.name}"
