from rest_framework import mixins, viewsets, status, pagination
from rest_framework.decorators import action
from rest_framework.response import Response
from django_filters import rest_framework as filters
from django.conf import settings
from rest_framework.permissions import (
    AllowAny,
    IsAuthenticated
)
from django.template.loader import render_to_string
from django.core.mail import EmailMultiAlternatives
from django.core.mail import send_mail

from .serializers import (UserLoginSerializer, 
                        UserModelSerializer, 
                        UserSignUpSerializer, 
                        ProfileModelSerializer,
                        ResetPasswordSerializer)

from .models import User, Profile


class ExamplePagination(pagination.PageNumberPagination):
    page_size = 1000

class ProfileViewSet(mixins.RetrieveModelMixin,                    
                    mixins.UpdateModelMixin,
                    viewsets.GenericViewSet):
    
    queryset = Profile.objects.all()
    serializer_class = ProfileModelSerializer
    lookup_field = 'user'
    permission_classes = [IsAuthenticated]
    pagination_class = ExamplePagination




class UserViewSet(viewsets.GenericViewSet,
                mixins.ListModelMixin,
                mixins.RetrieveModelMixin,
                mixins.UpdateModelMixin):
        
    serializer_class = UserModelSerializer
    lookup_field = 'username'
    filter_backends = (filters.DjangoFilterBackend,)

    def get_queryset(self):
        if self.action == 'retrieve':
            return User.objects.all()
        if self.action == 'list':
            User.objects.filter(is_verified=True)

    def get_permissions(self):

        if self.action in ['login', 'signup', 'reset_password']:
            permissions = [AllowAny]
        elif self.action in ['retrieve']:
            permissions = [IsAuthenticated]
        else:
            permissions = [IsAuthenticated]
        return [p() for p in permissions]

    class UserFilter(filters.FilterSet):
        class Meta:
            model = User
            fields = {
                'type_user': ['exact'],
                'first_name': ['contains', 'icontains'],
                'last_name': ['contains', 'icontains'],
                'region': ['contains'],
                'country': ['contains'],
                'commune':['contains'], 
            }

    filterset_class = UserFilter

    @action(detail=False, methods=['post'])
    def reset_password(self, request):
        serializer = ResetPasswordSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        data = {
            'message': 'ACTUALIZADO'
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
       

        subject = 'Bienvenidos/as a AMA 2022'
        from_email = '<noresponder@amamaule.cl>'
        content = render_to_string(
            'signup.html',
            { 'user': data}
        )
        msg = EmailMultiAlternatives(subject, content, from_email, [user.email])
        msg.attach_alternative(content, "text/html")
        msg.send()


        return Response(data, status=status.HTTP_201_CREATED)
