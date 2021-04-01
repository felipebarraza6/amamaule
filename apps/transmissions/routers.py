from django.urls import include, path
from rest_framework.routers import DefaultRouter
from apps.transmissions.views import TransmissionsViewSet

router = DefaultRouter()

router.register('', TransmissionsViewSet, basename='transmissions')
#router.register('profile', ProfileViewSet, basename='profiles')

urlpatterns = [
    path('', include(router.urls))
]
