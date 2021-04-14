from apps.link_instances.models import Invitation, Meeting
from rest_framework import serializers
from apps.users.serializers import UserModelSerializer
from apps.link_instances.models import Meeting
from django.core.mail import send_mail
from django.conf import settings


class MeetingSeV(serializers.ModelSerializer):
    owner = UserModelSerializer()
    class Meta:
        model = Meeting
        fields = ('__all__')


class InvitationModelSerializer(serializers.ModelSerializer):    
    class Meta:
        model = Invitation
        fields = ('__all__')
    
    def update(self, instance, validated_data):

        get_meeting = Meeting.objects.get(uuid=instance.meeting.uuid)


        instance.answer = validated_data['answer']
        instance.is_active = False

        if(instance.answer == True):
            send_mail('ACABAS DE CONFIRMAR LA INVITACIÓN A UNA REUNIÓN',
                      (
                          '¡Hola! {}, acabas de confirmar la invitación a una reunión online en las Rondas de Vinculación de AMA Maule. Cuando sea la hora de tu reunión, se activará la opción de "Acceder" para que puedas ingresar a tu reunión programada.').format(
                          instance.invited.first_name),
                      settings.DEFAULT_FROM_EMAIL,
                      [instance.invited.email])
            send_mail('UN INVITADO ACABA DE CONFIRMAR SU PARTICIPACION',
                      (
                          '¡Hola! {}, un invitado acaba de confirmar su participación en la reunión online que solicitaste en las Rondas de Vinculación de AMA Maule. Cuando sea la hora de tu reunión, se activará la opción de "Acceder" para que puedas ingresar a tu reunión programada.').format(
                          get_meeting.owner.first_name),
                      settings.DEFAULT_FROM_EMAIL,
                      [get_meeting.owner.email])
            Meeting.objects.filter(uuid=instance.meeting.uuid).update(is_validated=True)



        else:
            Meeting.objects.filter(uuid=instance.meeting.uuid).update(is_validated=False)
        instance.save()
        return instance


class ListInvitationModelSerializer(serializers.ModelSerializer):
    meeting = MeetingSeV()

    class Meta:
        model = Invitation 
        fields = ('__all__')