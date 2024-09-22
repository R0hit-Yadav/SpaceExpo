from django.urls import path
from .views import PlanetViewSet,RocketViewSet

urlpatterns = [
    path('planets', PlanetViewSet.as_view(), name='planets'),
    path('rocket', RocketViewSet.as_view(), name='rockets'),
]
    
