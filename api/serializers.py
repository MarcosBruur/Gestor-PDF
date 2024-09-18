from rest_framework.serializers import ModelSerializer
from .models import User,File


class UserSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

class FileSerializer(ModelSerializer):
    class Meta:
        model = File
        fields = '__all__'
    