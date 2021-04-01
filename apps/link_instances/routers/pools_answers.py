from django.urls import include, path
from rest_framework.routers import DefaultRouter

from apps.link_instances.views import PoolAnswersViewSet

router = DefaultRouter()

router.register('', PoolAnswersViewSet, basename='meeting-pools')

urlpatterns = [
    path('', include(router.urls))
]
