from rest_framework import mixins, viewsets, status

from rest_framework.permissions import (
    AllowAny,
    IsAuthenticated
)

from apps.transmissions.models import Transmission
from apps.transmissions.serializers import TransmissionModelSerializer, CommentModelserializer
from django_filters import rest_framework as filters


class TransmissionsViewSet(mixins.RetrieveModelMixin,
                    mixins.ListModelMixin,
                    mixins.UpdateModelMixin,
                    viewsets.GenericViewSet):
    
    queryset = Transmission.objects.all().order_by('created')
    serializer_class = TransmissionModelSerializer
    filter_backends = (filters.DjangoFilterBackend,)
    lookup_field = 'uuid'

    def get_permissions(self):
        if self.action in ['retrieve']:
            permissions = [AllowAny]
        else:
            permissions = [IsAuthenticated]
        return [p() for p in permissions]

    class TransmissionFilter(filters.FilterSet):
        class Meta:
            model = Transmission
            fields = {
                'category':['exact'],
                'is_live': ['exact'] ,
                'required_auth': ['exact'],
                'broadcast_date': ['exact', 'contains']              
            }
    
    filterset_class = TransmissionFilter
