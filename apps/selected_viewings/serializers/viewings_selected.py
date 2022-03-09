from apps.selected_viewings.models import ViewingSelected, Comment
from apps.users.serializers import UserModelSerializer, UserCommentsInfo
from rest_framework import serializers


class CommentModelSerializer(serializers.ModelSerializer):
    user = UserCommentsInfo()

    class Meta:
        model = Comment
        fields = ('__all__')

class ViewingModelSerializer(serializers.ModelSerializer):
    user = UserModelSerializer()
    comments = serializers.SerializerMethodField('get_comments')

    def get_comments(self, viwing):
        qs = Comment.objects.filter(viwing=viwing)
        serializer = CommentModelSerializer(instance=qs, many=True)
        data = serializer.data
        return data

    class Meta:
        model = ViewingSelected
        fields = ('__all__')

