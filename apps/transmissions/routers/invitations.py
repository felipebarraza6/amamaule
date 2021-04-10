from django.urls import include, path
from rest_framework.routers import DefaultRouter
from apps.transmissions.views import InvitationsViewSet

router = DefaultRouter()

router.register('', InvitationsViewSet, basename='invitations')

urlpatterns = [
    path('', include(router.urls))
]
