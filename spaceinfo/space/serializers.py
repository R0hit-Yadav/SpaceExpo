from rest_framework import serializers
from .models import Planet
from .models import SignupData

class PlanetSerializer(serializers.ModelSerializer):
    class Meta:
        model = Planet
        fields = '__all__'

class SignupDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = SignupData
        fields = '__all__'


    def validate(self, data):
        if SignupData.objects.filter(username=data.get('username')).exists():
            raise serializers.ValidationError({'username': 'Username already exists'})
        if SignupData.objects.filter(email=data.get('email')).exists():
            raise serializers.ValidationError({'email': 'Email already exists'})
        return data


