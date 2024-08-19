from rest_framework import viewsets
from .serializer import UserSerializer, FileSerializer
from .models import Users, Files


# Create your views here.
class UserView(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    queryset = Users.objects.all()


class FileView(viewsets.ModelViewSet):
    serializer_class = FileSerializer
    queryset = Files.objects.all()
