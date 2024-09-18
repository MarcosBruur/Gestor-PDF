from django.urls import path,include
from rest_framework import routers
from api import views
from rest_framework_simplejwt.views import TokenRefreshView
from .views import MyTokenObtainPairView


router = routers.DefaultRouter()

router.register(r'users',views.UserView,'users')
router.register(r'files',views.FileView,'files')

urlpatterns = [
    path('api/v1/',include(router.urls)),
    path('api/token/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]






