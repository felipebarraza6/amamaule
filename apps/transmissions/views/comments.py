from rest_framework import mixins, viewsets, status, pagination

from rest_framework.permissions import (    
    IsAuthenticated    
)

from apps.transmissions.models import Comment
from apps.transmissions.serializers import CommentModelserializer, CommentTxtSerializer
from django_filters import rest_framework as filters

class ExamplePagination(pagination.PageNumberPagination):       
       page_size = 10

class CommentsViewSet(mixins.ListModelMixin,
                    mixins.CreateModelMixin,
                    viewsets.GenericViewSet):
    
    queryset = Comment.objects.all()
    serializer_class = CommentModelserializer
    filter_backends = (filters.DjangoFilterBackend,)
    lookup_field = 'id'
    permission_classes = [IsAuthenticated]
    pagination_class=ExamplePagination

    def get_serializer_class(self):
        if self.action == 'list':
            return CommentTxtSerializer
        else:
            return CommentModelserializer


    class CommentFilter(filters.FilterSet):
        class Meta:
            model = Comment
            fields = {
                'transmission':['exact'],                
                'is_active': ['exact'],                
            }
    
    filterset_class = CommentFilter
