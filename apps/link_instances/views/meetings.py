from rest_framework import mixins, viewsets, status
from rest_framework.decorators import action
from rest_framework.permissions import (
    IsAuthenticated,    
)
from rest_framework.response import Response

from apps.link_instances.models import Meeting, Invitation
from apps.link_instances.serializers import (MeetingModelSerializer,
                                             ListMeetingModelSerializer,
                                             CreateMeetingModelSerializer)
from django_filters import rest_framework as filters
from asgiref.sync import sync_to_async


class MeetingViewSet(mixins.RetrieveModelMixin,
                    mixins.ListModelMixin,
                    mixins.CreateModelMixin,
                    mixins.UpdateModelMixin,
                    viewsets.GenericViewSet):
    
    queryset = Meeting.objects.all().order_by('start_date')
    filter_backends = (filters.DjangoFilterBackend,)
    lookup_field = 'uuid'
    permission_classes = [IsAuthenticated]

    def get_serializer_class(self):
        if self.action == 'list':
            return ListMeetingModelSerializer        
        if self.action == 'retrieve':
            return ListMeetingModelSerializer
        if self.action == 'create':
            return CreateMeetingModelSerializer
        else:
            return MeetingModelSerializer

    class MeetingFilter(filters.FilterSet):
        class Meta:
            model = Meeting
            fields = {       
                'uuid':['exact'],
                'owner': ['exact'],
                'participans_invited': ['exact'],
                'participans_validated': ['exact'],
                'is_active': ['exact'],
                'is_end': ['exact'],
                'is_programmatic_dialogues': ['exact'],
                'is_validated': ['exact'],
                'start_date': ['contains', 'gte', 'lte', 'year', 'month', 'day', 'year__range', 'month__range',
                            'day__range', 'date__range', 'hour', 'minute', 'second', 'hour__range', 'minute__range', 'minute__range'],
                'end_date': ['contains', 'gte', 'lte', 'year', 'month', 'day', 'year__range', 'month__range',
                               'day__range', 'date__range', 'hour', 'minute', 'second']
            }
    
    filterset_class = MeetingFilter

    