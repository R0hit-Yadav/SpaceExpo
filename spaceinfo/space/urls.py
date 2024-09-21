from django.urls import path
from .views import PlanetViewSet


urlpatterns = [
    path('planets', PlanetViewSet.as_view(), name='planets'),
]
    
