
from apps.workshops.models import Workshop
from rest_framework import serializers



class WorkshopModelSerializer(serializers.Serializer):
     class Meta:
            model = Workshop
            fields = ('__all__')