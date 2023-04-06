from django.urls import include, path
from rest_framework.routers import DefaultRouter

from apps.link_instances.views import TableMeetingViewSet
router = DefaultRouter()

router.register('', TableMeetingViewSet, basename='tables')

urlpatterns = [
    path('', include(router.urls))
]
