from django.db import models
from django.contrib.auth.models import AbstractUser
from PyPDF2 import PdfReader
import os
import logging

logger = logging.getLogger(__name__)

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
    pages = models.IntegerField(blank=True,null=True)
    file = models.FileField(upload_to='pdfs/')
    user = models.ForeignKey(User,on_delete=models.CASCADE)


    def __str__(self):
        return f"{self.name} - {self.user.name}"
    
    def save(self, *args, **kwargs):
    
        super().save(*args, **kwargs)
        
        if not self.name:
            self.name = os.path.basename(self.file.name)

        if not self.pages and self.file:
            try:
                
                path = self.file.path  
                with open(path, 'rb') as f:
                    pdf_reader = PdfReader(f)  
                    self.pages = len(pdf_reader.pages)  
            except Exception as e:
                self.pages = 0  

        
        super().save(*args, **kwargs)