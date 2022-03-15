from django.contrib.auth import password_validation, authenticate
from django.core.validators import RegexValidator

from apps.users.models import User, Profile
from rest_framework.authtoken.models import Token
from rest_framework import serializers
from rest_framework.validators import UniqueValidator


class ResetPasswordSerializer(serializers.Serializer):
    user = serializers.EmailField()
    phone_number = serializers.CharField()
    new_password = serializers.CharField(min_length=6, max_length=64)

    def validate(self, data):
        user = data['user']
        phone_number = data['phone_number']
        try:
            get_user = User.objects.get(email=user)
        
            data_phone_number = get_user.phone_number
            data_email = get_user.email
        except:
             raise serializers.ValidationError('El usuario no existe!')
       
        
        if data_phone_number == phone_number:                        
            get_user.set_password(data['new_password'])
            get_user.save()
        else:
            raise serializers.ValidationError('El telefono no coincide!')
        return data

class SuppUserModelSerializer(serializers.ModelSerializer):    
    class Meta:
        model = User
        fields = '__all__'

class ProfileModelSerializer(serializers.ModelSerializer):
    user = SuppUserModelSerializer()
    class Meta:
        model = Profile
        fields = '__all__'
    
    def update(self, instance, validated_data):
        if('dossier_file' in  validated_data):
            User.objects.filter(id=instance.user.id).update(is_upload_dossier=True)
            instance.dossier_archivo = validated_data['dossier_file']

        return super(ProfileModelSerializer, self).update(instance,
                validated_data)

    def create(self, data):
        User.objects.filter(id=data['user'].id).update(is_verified=True)
        Profile.objects.create(**data)
        return data
    
class UserModelSerializer(serializers.ModelSerializer):
    profile = ProfileModelSerializer()
    class Meta:
        model = User
        fields = (
            'id',
            'first_name',
            'last_name',
            'username',
            'phone_number',
            'email',
            'type_user',
            'country',
            'region',
            'province',
            'commune',
            'is_active',
            'is_verified',
            'profile'    
        )

class UserCommentsInfo(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = (            
            'username',
        )


class UserLoginSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField(min_length=6, max_length=64)

    def validate(self, data):
        user = authenticate(username = data['email'], password = data['password'])

        if not user:
            raise serializers.ValidationError('Credenciales invalidas!')

        self.context['user'] = user
        return data
    
    def create(self, data):
        token, created = Token.objects.get_or_create(user=self.context['user'])
        return self.context['user'], token.key


class UserSignUpSerializer(serializers.Serializer):
    email = serializers.EmailField(
        validators=[UniqueValidator(queryset=User.objects.all(), message="el email ya existe, prueba con otro email." )]
    )

    username = serializers.CharField(
        min_length = 4,
        max_length = 20,
        validators=[UniqueValidator(User.objects.all(), message="el usuario ya existe, prueba con otro nombre.")]
    )

    phone_number = serializers.CharField(
        max_length = 17,
        validators=[UniqueValidator(User.objects.all(), message="el telefono ya existe, prueba con otro telefono.")]
    )

    first_name = serializers.CharField()
    last_name = serializers.CharField()
    country = serializers.CharField()
    region = serializers.CharField()
    province = serializers.CharField(allow_null=True, required=False)
    commune = serializers.CharField(allow_null=True, required=False)

    

    password = serializers.CharField(min_length =6, max_length =64)
    password_confirmation = serializers.CharField(min_length =6, max_length =64)

    def validate(self, data):
        passwd = data['password']
        passwd_conf = data['password_confirmation']
        if passwd != passwd_conf:
            raise serializers.ValidationError("Las contraseñas no son iguales")
        password_validation.validate_password(passwd)
        return data
    
    def create(self, data):
        data.pop('password_confirmation')
        user = User.objects.create_user(**data, is_active=True)
        # Crear perfil
        Profile.objects.create(user=user)
        return user

