from django.urls import include, path
from rest_framework.routers import DefaultRouter

from apps.workshops.views import WorkshopViewSet
router = DefaultRouter()

router.register('', WorkshopViewSet, basename='workshops')

urlpatterns = [
    path('', include(router.urls))
]
