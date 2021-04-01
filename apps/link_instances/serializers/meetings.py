from apps.link_instances.models import Meeting, Invitation
from rest_framework import serializers
from apps.users.serializers import UserModelSerializer
from .invitations import InvitationModelSerializer

class MeetingModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Meeting
        fields = ('__all__')        


class ListMeetingModelSerializer(serializers.ModelSerializer):
    owner = UserModelSerializer()
    participans_invited = UserModelSerializer(many=True)
    participans_validated = UserModelSerializer(many=True)
    invitations = serializers.SerializerMethodField('get_invitations')

    def get_invitations(self, meeting):
        qs = Invitation.objects.filter(meeting=meeting)
        serializer = InvitationModelSerializer(instance=qs, many=True)
        data = serializer.data
        return data
    
    class Meta:
        model = Meeting
        fields = ('__all__')