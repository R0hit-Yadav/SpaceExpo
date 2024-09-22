from rest_framework import viewsets,generics
from .models import Planet,Rocket
from .serializers import PlanetSerializer,RocketSerializer

class PlanetViewSet(generics.ListAPIView):
    queryset = Planet.objects.all()
    serializer_class = PlanetSerializer

class RocketViewSet(generics.ListAPIView):
    queryset = Rocket.objects.all()
    serializer_class = RocketSerializer




