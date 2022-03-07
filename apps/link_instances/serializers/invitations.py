from apps.link_instances.models import Invitation, Meeting
from rest_framework import serializers
from apps.users.serializers import UserModelSerializer
from apps.link_instances.models import Meeting
from django.core.mail import send_mail
from django.conf import settings
from apps.users.serializers import UserModelSerializer
from django.template.loader import render_to_string
from django.core.mail import EmailMultiAlternatives



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

        if(instance.answer == True):            

            subjecta = '¡Tu reunión para AMA 2022 ha sido confirmada!'
            from_emaila = '<noresponder@amamaule.cl>'
            contenta = render_to_string(
                'confirmation.html',
                { 'user': instance}
            )
            
            msga = EmailMultiAlternatives(subjecta, contenta, from_emaila, [instance.owner.email])            
            msga.attach_alternative(contenta, "text/html")
            msga.send()


            Meeting.objects.filter(uuid=instance.meeting.uuid).update(is_validated=True) 
        else:
            Meeting.objects.filter(uuid=instance.meeting.uuid).update(is_validated=False)
        
        instance.save()
        return instance


class ListInvitationModelSerializer(serializers.ModelSerializer):    
    class Meta:
        model = Invitation 
        fields = ('__all__')