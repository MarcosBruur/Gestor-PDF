from django.db import models
from django.contrib.auth.models import AbstractUser
from PyPDF2 import PdfFileReader

class User(AbstractUser):
    name = models.CharField(max_length=255)
    email = models.CharField(max_length=255,unique=True)
    password = models.CharField(max_length=255)

    username = None
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    def __str__(self):
        return f"{self.name} - {self.email}"

class File(models.Model):
    name = models.CharField(max_length=255)
    pages = models.IntegerField()
    file = models.FileField(upload_to='pdfs/')
    user = models.ForeignKey(User,on_delete=models.CASCADE)


    def __str__(self):
        return f"{self.name} - {self.user.name}"
    
    def save(self, *args, **kwargs):
        if not self.pages and self.file:
            try:
                # Abre el archivo PDF para contar las páginas
                pdf_reader = PdfFileReader(self.file)
                self.pages = pdf_reader.getNumPages()
            except Exception as e:
                self.pages = 0  # Si hay algún error, puedes asignar 0 o manejarlo de otra forma
        super().save(*args, **kwargs)
