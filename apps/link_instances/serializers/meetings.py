from apps.link_instances.models import Meeting, Invitation
from rest_framework import serializers
from apps.users.serializers import UserModelSerializer
from .invitations import InvitationModelSerializer
import requests


class MeetingModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Meeting
        fields = ('__all__')        

class CreateMeetingModelSerializer(serializers.ModelSerializer):

    class Meta:
        model = Meeting
        fields = '__all__'


class FinishMeetingSerializer(serializers.Serializer):
    id_meeting = serializers.CharField(max_length=122)
    uuid_meeting = serializers.CharField(max_length=122)
    def validate(self, data):

        API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmFwcGVhci5pbiIsImF1ZCI6Imh0dHBzOi8vYXBpLmFwcGVhci5pbi92MSIsImV4cCI6OTAwNzE5OTI1NDc0MDk5MSwiaWF0IjoxNjE4MjE3NzYzLCJvcmdhbml6YXRpb25JZCI6OTQxNzgsImp0aSI6IjdiODIxNzFhLWNkM2EtNDBlZS1iODIyLTVmY2I2NTFlY2MxYiJ9.hcmJ8XKGvVZ3mWFxbk1BaiOjNQL43Xa6y6o_Urql4Qg"

        id_meet = data['id_meeting']
        headers = {
            "Authorization": f"Bearer {API_KEY}",
            "Content-Type": "application/json",
        }

        response = requests.delete(
            f"https://api.whereby.dev/v1/meetings/{id_meet}/",
            headers=headers,
        )

        if response.status_code == 204:
            Meeting.objects.filter(uuid=data['uuid_meeting']).update(
                src_host='',
                message_invited='',
                is_end=True
            )
        else:
           raise serializers.ValidationError('No eliminada')
        return data


class CreateMeetingSerializer(serializers.Serializer):
    uuid_meeting = serializers.CharField(max_length=122)
    start_date = serializers.CharField(max_length=122)
    end_date = serializers.CharField(max_length=122)
    mode = serializers.CharField()

    def validate(self, data):


        API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmFwcGVhci5pbiIsImF1ZCI6Imh0dHBzOi8vYXBpLmFwcGVhci5pbi92MSIsImV4cCI6OTAwNzE5OTI1NDc0MDk5MSwiaWF0IjoxNjE4MjE3NzYzLCJvcmdhbml6YXRpb25JZCI6OTQxNzgsImp0aSI6IjdiODIxNzFhLWNkM2EtNDBlZS1iODIyLTVmY2I2NTFlY2MxYiJ9.hcmJ8XKGvVZ3mWFxbk1BaiOjNQL43Xa6y6o_Urql4Qg"

        data_meeting = {
            "isLocked": True,
            "roomNamePattern": "uuid",
            "startDate": data['start_date'],
            "endDate": data['end_date'],
            "roomMode": data['mode'],
            "fields": ["hostRoomUrl"],
        }

        headers = {
            "Authorization": f"Bearer {API_KEY}",
            "Content-Type": "application/json",
        }

        response = requests.post(
            "https://api.whereby.dev/v1/meetings",
            headers=headers,
            json=data_meeting
        ).json()


        Meeting.objects.filter(uuid=data['uuid_meeting']).update(
            src_host=response['roomUrl'],
            message_invited=response['meetingId']
        )

        return data


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