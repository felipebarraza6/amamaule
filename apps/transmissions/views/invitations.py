from rest_framework import (mixins, viewsets, status)

from rest_framework.permissions import (
    AllowAny,
    IsAuthenticated
)

from apps.transmissions.models import Invitation
from apps.transmissions.serializers import InvitationModelSerializer, CreateInvitationModelSerializer



class InvitationsViewSet(mixins.RetrieveModelMixin,
                           mixins.CreateModelMixin,
                           viewsets.GenericViewSet):
    queryset = Invitation.objects.all()
    serializer_class = InvitationModelSerializer
    lookup_field = 'uuid'

    def get_serializer_class(self):
        if self.action == 'create':
            return CreateInvitationModelSerializer
        else:
            return InvitationModelSerializer

    def get_permissions(self):
        if self.action in ['retrieve']:
            permissions = [AllowAny]
        else:
            permissions = [IsAuthenticated]
        return [p() for p in permissions]