from apps.transmissions.models import Transmission, Comment
from rest_framework import serializers
from apps.users.serializers import UserCommentsInfo


class CommentModelserializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = ('__all__')

class CommentTxtSerializer(serializers.ModelSerializer):
    user = UserCommentsInfo(many=False)
    class Meta:
        model = Comment
        fields = ('__all__')

class TransmissionModelSerializer(serializers.ModelSerializer):
    comments = serializers.SerializerMethodField('get_comments')

    def get_comments(self, transmission):
        qs = Comment.objects.filter(transmission=transmission)
        serializer = CommentModelserializer(instance=qs, many=True)
        return serializer.data

    class Meta:
        model = Transmission
        fields = ('__all__')