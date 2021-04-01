from rest_framework import mixins, viewsets, status
from rest_framework.decorators import action
from rest_framework.permissions import (
    IsAuthenticated,    
)
from rest_framework.response import Response

from apps.link_instances.models import Pool_answers
from apps.link_instances.serializers import PoolAnswersModelSerializer



class PoolAnswersViewSet(mixins.CreateModelMixin,                    
                    viewsets.GenericViewSet):
    
    queryset = Pool_answers.objects.all()        
    lookup_field = 'id'
    permission_classes = [IsAuthenticated]

    def get_serializer_class(self):
        if self.action == 'list':
            return PoolAnswersModelSerializer        
        else:
            return PoolAnswersModelSerializer