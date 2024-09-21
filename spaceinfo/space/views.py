from rest_framework import viewsets,generics
from .models import Planet
from .serializers import PlanetSerializer
class PlanetViewSet(generics.ListAPIView):
    queryset = Planet.objects.all()
    serializer_class = PlanetSerializer


