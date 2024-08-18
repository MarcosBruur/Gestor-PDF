from django.db import models

# Create your models here.


class Users(models.Model):
    user_name = models.CharField(max_length=255)
    email = models.EmailField(max_length=200)
    password = models.CharField(max_length=200)
    active = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.email} - {self.active}"
