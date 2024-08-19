from django.db import models
from PyPDF2 import PdfReader
import os
# Create your models here.


class Users(models.Model):
    user_name = models.CharField(max_length=255)
    email = models.EmailField(max_length=200)
    password = models.CharField(max_length=200)
    active = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.email} - {self.active}"


class Files(models.Model):
    pdf_file = models.FileField(upload_to='pdfs/')
    name = models.CharField(max_length=255, blank=True)
    pages = models.IntegerField(editable=False)
    user = models.ForeignKey(
        Users, related_name='files', on_delete=models.CASCADE
    )

    def save(self, *args, **kwargs):
        if self.pdf_file:
            # Abrir el archivo PDF y contar las páginas
            reader = PdfReader(self.pdf_file)
            self.pages = len(reader.pages)
            self.name = os.path.basename(self.pdf_file.name)
        super(Files, self).save(*args, **kwargs)

    def __str__(self):
        return f"{self.name} - {self.pages}"
