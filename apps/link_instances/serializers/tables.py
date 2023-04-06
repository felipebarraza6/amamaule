from apps.link_instances.models import TableMeeting
from rest_framework import serializers
from apps.users.serializers import UserModelSerializer


class TableMettingModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = TableMeeting
        fields = '__all__'

class RetrieveTableMettingModelSerializer(serializers.ModelSerializer):
    programmer = UserModelSerializer()
    class Meta:
        model = TableMeeting
        fields = '__all__'
