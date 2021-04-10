from rest_framework import mixins, viewsets, status

from rest_framework.permissions import (
    IsAuthenticated,    
)

from apps.link_instances.models import Invitation
from apps.link_instances.serializers import InvitationModelSerializer, ListInvitationModelSerializer
from django_filters import rest_framework as filters


class InvitationViewSet(mixins.ListModelMixin, 
                    mixins.CreateModelMixin,                   
                    mixins.UpdateModelMixin,
                    viewsets.GenericViewSet):
    
    queryset = Invitation.objects.filter(is_active=True)
    lookup_field = 'id'
    permission_classes = [IsAuthenticated]
    filter_backends = (filters.DjangoFilterBackend,)

    def get_serializer_class(self):
        if self.action == 'list':
            return ListInvitationModelSerializer
        if self.action == 'retrieve':
            return InvitationModelSerializer        
        else:
            return InvitationModelSerializer

    class InvitationFilter(filters.FilterSet):
        class Meta:
            model = Invitation
            fields = {       
                'invited':['exact'],
                'meeting': ['exact'],
                'is_active': ['exact'],
                'answer': ['exact']   
            }
                
    filterset_class = InvitationFilter

