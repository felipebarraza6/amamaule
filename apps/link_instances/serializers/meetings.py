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

        """for element in participans:
            if element.id != owner.id:
                invited = User.objects.get(id=element.id)
                obj_participant = invited

        send_mail('ACABAS DE ENVIAR UNA SOLICITUD PARA UNA REUNIÓN',
                 ('¡Hola! {}, acabas de enviar una solicitud para una reunión online con un participante de las Rondas de Vinculación de AMA Maule. Dirígete a la sección y revisa el estado de tu reunión. ').format(get_user.first_name),
                settings.DEFAULT_FROM_EMAIL,
                [get_user.email])

        send_mail('ACABAS DE RECIBIR UNA INVITACION PARA UNA REUNIÓN',
                  (
                      '¡Hola! {}, has recibido una solicitud para una reunión online en las Rondas de Vinculación de AMA Maule. Dirígete a la sección y confirma tu reunión.').format(
                      obj_participant.first_name),
                      settings.DEFAULT_FROM_EMAIL,
                      [obj_participant.email]
                  )"""

        return attrs

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
    participans_invited = UserModelSerializer(many=True)
    participans_validated = UserModelSerializer(many=True)

   
    class Meta:
        model = Meeting
        fields = ('__all__')