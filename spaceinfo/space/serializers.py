from rest_framework import serializers
from .models import Planet,Rocket

class PlanetSerializer(serializers.ModelSerializer):
    class Meta:
        model = Planet
        fields = '__all__'

class RocketSerializer(serializers.ModelSerializer):
    class Meta:
        model = Rocket
        fields = '__all__'





