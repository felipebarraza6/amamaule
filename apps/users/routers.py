from django.urls import include, path
from rest_framework.routers import DefaultRouter
from .views import UserViewSet, ProfileViewSet

router = DefaultRouter()

router.register('', UserViewSet, basename='users')
router.register('profile', ProfileViewSet, basename='profiles')

urlpatterns = [
    path('', include(router.urls))
]