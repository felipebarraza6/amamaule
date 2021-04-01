from django.urls import include, path
from rest_framework.routers import DefaultRouter

from apps.selected_viewings.views import ViewingViewSet
router = DefaultRouter()

router.register('', ViewingViewSet, basename='selected_viewings')

urlpatterns = [
    path('', include(router.urls))
]
