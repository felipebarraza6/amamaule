from rest_framework import mixins, viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response

from rest_framework.permissions import (
    AllowAny,
    IsAuthenticated
)

from .serializers import (UserLoginSerializer, 
                        UserModelSerializer, 
                        UserSignUpSerializer, 
                        ProfileModelSerializer,
                        ResetPasswordSerializer)

from .models import User, Profile

class ProfileViewSet(mixins.RetrieveModelMixin,                    
                    mixins.UpdateModelMixin,
                    viewsets.GenericViewSet):
    
    queryset = Profile.objects.all()
    serializer_class = ProfileModelSerializer
    lookup_field = 'user'
    permission_classes = [IsAuthenticated]




class UserViewSet(viewsets.GenericViewSet,
                mixins.ListModelMixin,
                mixins.RetrieveModelMixin,
                mixins.UpdateModelMixin):
    
    queryset = User.objects.filter(is_verified=True)
    serializer_class = UserModelSerializer
    lookup_field = 'username'

    def get_permissions(self):

        if self.action in ['login', 'signup', 'reset_password']:
            permissions = [AllowAny]
        elif self.action in ['retrieve']:
            permissions = [IsAuthenticated]
        else:
            permissions = [IsAuthenticated]
        return [p() for p in permissions]


    @action(detail=False, methods=['post'])
    def reset_password(self, request):
        serializer = ResetPasswordSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        data = {
            'status': 'OK'
        }
        
        return Response(data, status=status.HTTP_200_OK)


    @action(detail=False, methods=['post'])
    def create_profile(self,request):
        serializer = ProfileModelSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        profile = serializer.save()
        data = {
            'profile': ProfileModelSerializer(profile).data
        }
        return Response(data, status=status.HTTP_201_CREATED)
        

    @action(detail=False, methods=['post'])
    def login(self, request):
        serializer = UserLoginSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user, token = serializer.save()
        data = {
            'user': UserModelSerializer(user).data,
            'access_token': token
        }
        return Response(data, status=status.HTTP_201_CREATED)
    
    @action(detail=False, methods=['post'])
    def signup(self, request):
        serializer = UserSignUpSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        data = UserModelSerializer(user).data
        return Response(data, status=status.HTTP_201_CREATED)
