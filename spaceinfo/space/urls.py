from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import PlanetViewSet
from .views import signup, login_view, logout_view, profile, get_csrf_token

router = DefaultRouter()
router.register(r'planets', PlanetViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
    path('api/signup/', signup, name='signup'),
    path('api/login/', login_view, name='login'),
    path('api/logout/', logout_view, name='logout'),
    path('api/profile/', profile, name='profile'),
    path('api/csrf/', get_csrf_token, name='csrf'),
]
    
