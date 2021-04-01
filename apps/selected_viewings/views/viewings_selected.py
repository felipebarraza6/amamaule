from rest_framework import mixins, viewsets, status

from rest_framework.permissions import (
    IsAuthenticated,    
)

from apps.selected_viewings.models import ViewingSelected
from apps.selected_viewings.serializers import ViewingModelSerializer


class ViewingViewSet(mixins.RetrieveModelMixin,
                    mixins.ListModelMixin,                
                    viewsets.GenericViewSet):
    
    queryset = ViewingSelected.objects.all()
    serializer_class = ViewingModelSerializer    
    lookup_field = 'uuid'
    permission_classes = [IsAuthenticated]
    
