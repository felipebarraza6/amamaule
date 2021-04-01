from rest_framework import mixins, viewsets, status

from rest_framework.permissions import (
    AllowAny,    
)

from apps.transmissions.models import Transmission
from apps.transmissions.serializers import TransmissionModelSerializer, CommentModelserializer
from django_filters import rest_framework as filters


class TransmissionsViewSet(mixins.RetrieveModelMixin,
                    mixins.ListModelMixin,
                    mixins.UpdateModelMixin,
                    viewsets.GenericViewSet):
    
    queryset = Transmission.objects.all()
    serializer_class = TransmissionModelSerializer
    filter_backends = (filters.DjangoFilterBackend,)
    lookup_field = 'uuid'
    permission_classes = [AllowAny]
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
