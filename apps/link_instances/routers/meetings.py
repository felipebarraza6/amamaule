from django.urls import include, path
from rest_framework.routers import DefaultRouter

from apps.link_instances.views import MeetingViewSet, InvitationViewSet
router = DefaultRouter()

router.register('', MeetingViewSet, basename='meetings')

urlpatterns = [
    path('', include(router.urls))
]
