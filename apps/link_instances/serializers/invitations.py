from apps.link_instances.models import Invitation, Meeting
from rest_framework import serializers
from apps.users.serializers import UserModelSerializer


class InvitationModelSerializer(serializers.ModelSerializer):    
    class Meta:
        model = Invitation
        fields = ('__all__')
    
    def update(self, instance, validated_data):
        
        instance.answer = validated_data['answer']
        instance.is_active = validated_data['is_active']
        if(instance.answer == True):
            Meeting.objects.filter(uuid=instance.meeting.uuid).update(is_validated=True)
        else:
            Meeting.objects.filter(uuid=instance.meeting.uuid).update(is_validated=False)
        instance.save()
        return instance


class ListInvitationModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Invitation 
        fields = ('__all__')