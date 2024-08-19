from django.urls import path, include
from rest_framework import routers
from .views import UserView, FileView


router = routers.DefaultRouter()
router.register(r'users', UserView, 'users')
router.register(r'files', FileView, 'files')

urlpatterns = [
    path("api/v1/", include(router.urls)),
]
