from django.db import models

class Planet(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    image = models.ImageField(upload_to='planets/')
    info=models.CharField(max_length=10000)

    def __str__(self):
        return self.name
    
class Rocket(models.Model):
    name = models.CharField(max_length=100)
    info = models.TextField()

    def __str__(self):
        return self.name
