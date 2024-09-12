from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import PlanetViewSet
from .views import SignupView, LoginView

router = DefaultRouter()
router.register(r'planets', PlanetViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
    path('api/signup/', SignupView.as_view(), name='signup'),
    path('api/login/', LoginView.as_view(), name='login'),
]
    
