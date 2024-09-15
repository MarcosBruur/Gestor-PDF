from django.shortcuts import render
from rest_framework import viewsets
from .serializers import UserSerializer
from .models import User
from rest_framework.decorators import action
from django.http.response import HttpResponse
from rest_framework import status
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.tokens import RefreshToken
from django.http import JsonResponse    
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework_simplejwt.tokens import AccessToken



class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        
        token['name'] = user.name
        token['email'] = user.email
        return token
class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

class UserView(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    queryset = User.objects.all()    


    @action(detail=False,methods=['POST'],url_path='register')
    def register(self,request):
        data = request.data

        if not data:
            return HttpResponse('No hay datos',status=status.HTTP_400_BAD_REQUEST)

        user = User(name=data['name'],email=data['email'])
        user.set_password(data['password'])
        user.save()
        return HttpResponse('Usuario registrado..')

    @action(detail=False,methods=['GET'],url_path='getcookie')
    def getcookie(self,request):
        token = request.COOKIES.get('access_token')
        if token:

            try:
                access_token = AccessToken(token)
                user = {
                    'name': access_token['name'],
                    'email':access_token['email']
                }
                return JsonResponse({'name':user['name'],'email':access_token['email']},status=status.HTTP_200_OK)
            except Exception as e:
                return JsonResponse({'error':str(e)},status=status.HTTP_400_BAD_REQUEST)
            
        return JsonResponse({'name': '', 'email': ''}, status=status.HTTP_404_NOT_FOUND)
        
    @action(detail=False,methods=['POST'],url_path='login')
    def login(self,request):
        data = request.data

        if not data:
            return HttpResponse('No hay datos',status=status.HTTP_400_BAD_REQUEST)
        
        try:
            user = User.objects.get(email=data['email'])
            if user.check_password(data['password']):

                
                serializer = MyTokenObtainPairSerializer(data=data)
                serializer.is_valid(raise_exception=True)

                refresh = serializer.validated_data['refresh']
                access = serializer.validated_data['access']


                refresh = RefreshToken.for_user(user)

                response = JsonResponse({
                    'refresh' : str(refresh),
                    'access': str(access)
                })
                response.set_cookie(
                         key='access_token',
                         value=str(access),
                         httponly=False,
                         secure=True,
                         samesite='None',
                         max_age=60 * 60 * 60
                    )
                
                return response
            else:
                return HttpResponse('Contraseña incorrecta',status=status.HTTP_404_NOT_FOUND)
        except:
            return HttpResponse('Usuario no encontrado',status=status.HTTP_404_NOT_FOUND)
      
   
    @action(detail=False,methods=['GET'],url_path='logout')
    def logout(self,request):
        resp = JsonResponse({'message':'Usuario cerro sesion'},status=status.HTTP_200_OK)
        resp.delete_cookie('access_token')
        return resp
    
    