from django.urls import include, path
from rest_framework.routers import DefaultRouter

from apps.link_instances.views import InvitationViewSet
router = DefaultRouter()

router.register('', InvitationViewSet, basename='invitations')

urlpatterns = [
    path('', include(router.urls))
]
