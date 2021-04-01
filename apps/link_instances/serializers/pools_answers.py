from apps.link_instances.models import Pool_answers
from rest_framework import serializers
from apps.users.serializers import UserModelSerializer


class PoolAnswersModelSerializer(serializers.ModelSerializer):    
    class Meta:
        model = Pool_answers
        fields = ('__all__')
