from rest_framework import mixins, viewsets, status

from rest_framework.permissions import (
    IsAuthenticated,    
)

from apps.workshops.models import Workshop
from apps.workshops.serializers import WorkshopModelSerializer
from django_filters import rest_framework as filters


class WorkshopViewSet(mixins.ListModelMixin, 
                    mixins.CreateModelMixin,                   
                    mixins.UpdateModelMixin,
                    viewsets.GenericViewSet):
    
    queryset = Workshop.objects.all().order_by('-date')
    lookup_field = 'id'
    filter_backends = (filters.DjangoFilterBackend,)
    serializer_class = WorkshopModelSerializer

    class InvitationFilter(filters.FilterSet):
        class Meta:
            model = Workshop
            fields = {       
                'is_active':['exact'],
                'is_digital': ['exact'],                
            }
                
    filterset_class = InvitationFilter

