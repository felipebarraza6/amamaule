from apps.link_instances.models import Invitation, Meeting
from rest_framework import serializers
from apps.users.serializers import UserModelSerializer
from apps.link_instances.models import Meeting


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
        
        instance.answer = validated_data['answer']
        instance.is_active = False
        if(instance.answer == True):
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