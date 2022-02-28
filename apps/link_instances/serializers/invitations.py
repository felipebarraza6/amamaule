from apps.link_instances.models import Invitation, Meeting
from rest_framework import serializers
from apps.users.serializers import UserModelSerializer
from apps.link_instances.models import Meeting
from django.core.mail import send_mail
from django.conf import settings
from apps.users.serializers import UserModelSerializer



class RetrieveModalSerializer(serializers.ModelSerializer):
    owner = UserModelSerializer()    
    invited = UserModelSerializer()    
    class Meta:
        model = Invitation
        fields = '__all__'


class InvitationModelSerializer(serializers.ModelSerializer): 
    owner = serializers.HiddenField(default=serializers.CurrentUserDefault())   
    class Meta:
        model = Invitation
        fields = ('__all__')
    
    def update(self, instance, validated_data):
        
        if('answer' in validated_data):
            instance.answer = validated_data['answer']
            if(validated_data['answer']):
                data_base = Meeting(start_date=instance.date_meeting,
                    is_active=instance.is_active,
                    owner=instance.owner,)
                data_base.save()
                data_base.participans_invited.add(instance.invited, instance.owner)
                data_base.participans_validated.add(instance.invited, instance.owner)
                
        elif('rescheduled' in validated_data):
            rq = Invitation.objects.create(
                    owner = instance.invited, 
                    invited = instance.owner,                    
                    date_meeting = validated_data['date_meeting'])                                                
            instance.rescheduled = validated_data['rescheduled']
            instance.date_meeting = validated_data['date_meeting']                                            
        instance.is_active = False

        """ if(instance.answer == True):
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
                Meeting.objects.filter(uuid=instance.meeting.uuid).update(is_validated=False)"""
        
        instance.save()
        return instance


class ListInvitationModelSerializer(serializers.ModelSerializer):    
    class Meta:
        model = Invitation 
        fields = ('__all__')