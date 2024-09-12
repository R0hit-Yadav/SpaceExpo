from rest_framework import viewsets
from .models import Planet
from .serializers import PlanetSerializer
from rest_framework import status, generics
from rest_framework.response import Response
from django.contrib.auth import authenticate
from .models import SignupData
from .serializers import SignupDataSerializer

class PlanetViewSet(viewsets.ModelViewSet):
    queryset = Planet.objects.all()
    serializer_class = PlanetSerializer

class SignupView(generics.CreateAPIView):
    queryset = SignupData.objects.all()
    serializer_class = SignupDataSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"message": "Signup successful"}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class LoginView(generics.GenericAPIView):
    def post(self, request, *args, **kwargs):
        username = request.data.get('username')
        password = request.data.get('password')
        try:
            user = SignupData.objects.get(username=username, password=password)
            if user:
                return Response({"message": "Login successful"}, status=status.HTTP_200_OK)
        except SignupData.DoesNotExist:
            return Response({"message": "Invalid credentials"}, status=status.HTTP_401_UNAUTHORIZED)




