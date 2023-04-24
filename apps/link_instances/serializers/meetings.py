from apps.link_instances.models import Meeting, Invitation
from apps.users.models import User
from rest_framework import serializers
from apps.users.serializers import UserModelSerializer
from .invitations import InvitationModelSerializer
from django.core.mail import send_mail
from django.conf import settings
import requests
from datetime import datetime


class MeetingModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Meeting
        fields = ('__all__')



class CreateMeetingModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Meeting
        fields = '__all__'

    def validate(self, attrs):

        owner = attrs['owner']


        participans = attrs['participans_invited']
        get_user = User.objects.get(id=owner.id)
        obj_participant = {}
        

        return attrs

class FinishMeetingSerializer(serializers.Serializer):
    id_meeting = serializers.CharField(max_length=122)
    uuid_meeting = serializers.CharField(max_length=122)
    def validate(self, data):

        API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmFwcGVhci5pbiIsImF1ZCI6Imh0dHBzOi8vYXBpLmFwcGVhci5pbi92MSIsImV4cCI6OTAwNzE5OTI1NDc0MDk5MSwiaWF0IjoxNjgxODM1OTg0LCJvcmdhbml6YXRpb25JZCI6MTgxNjkwLCJqdGkiOiIwZTQzZjI4OS05NDI2LTQwZWEtYjZjNi01Zjc3Nzk2Nzg3MjMifQ._0pbXdLkW3QwHtyIfjdWmlwLV_s7Xi8ZhDvNocxp3CQ"

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
        get_meeting_obj = Meeting.objects.filter(uuid=data['uuid_meeting']).first()

        if(get_meeting_obj.src_host):
            raise serializers.ValidationError('Ya existe acceso')

        API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmFwcGVhci5pbiIsImF1ZCI6Imh0dHBzOi8vYXBpLmFwcGVhci5pbi92MSIsImV4cCI6OTAwNzE5OTI1NDc0MDk5MSwiaWF0IjoxNjQ1OTEyMDE1LCJvcmdhbml6YXRpb25JZCI6MTU0MTE0LCJqdGkiOiI1MDJhMDdiYS0yNTUyLTQxMWQtOTI3NC1iYjZmMTVlOGQ1MTcifQ.JyG49Ds849RQwaugrGvMl0uhv581NUjtQcz6MJcVfGo"

        data_meeting = {
            "isLocked": False,
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
    invited = UserModelSerializer() 
    participans_invited = UserModelSerializer(many=True)
    participans_validated = UserModelSerializer(many=True)

   
    class Meta:
        model = Meeting
        fields = ('__all__')