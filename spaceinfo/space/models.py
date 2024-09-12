from django.db import models

class Planet(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    image = models.ImageField(upload_to='planets/')

    def __str__(self):
        return self.name

class SignupData(models.Model):
    username = models.CharField(max_length=100, unique=True)
    password = models.CharField(max_length=100)
    email = models.EmailField(max_length=100)
    
    phone = models.CharField(max_length=15)

    def __str__(self):
        return self.username