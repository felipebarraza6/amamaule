from django.urls import include, path
from rest_framework.routers import DefaultRouter
from apps.transmissions.views import CommentsViewSet

router = DefaultRouter()

router.register('', CommentsViewSet, basename='comments')

urlpatterns = [
    path('', include(router.urls))
]
