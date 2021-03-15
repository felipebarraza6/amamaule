from django.contrib.auth import password_validation, authenticate
from django.core.validators import RegexValidator

from apps.users.models import User, Profile
from rest_framework.authtoken.models import Token
from rest_framework import serializers
from rest_framework.validators import UniqueValidator


class ResetPasswordSerializer(serializers.Serializer):
    user = serializers.EmailField()
    phone_number = serializers.CharField()
    username = serializers.CharField()
    new_password = serializers.CharField(min_length=6, max_length=64)

    def validate(self, data):
        user = data['user']
        phone_number = data['phone_number']
        username = data['username']

        get_user = User.objects.get(email=user)
        
        data_phone_number = get_user.phone_number
        data_username = get_user.username
        
        if phone_number == data_phone_number and username == data_username:
            get_user.set_password(data['new_password'])
            get_user.save()
        else:
            serializers.ValidationError('Tus datos no coinciden!')
        return data




class ProfileModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = '__all__'
    
    def update(self, instance, validated_data):
        if('dossier_archivo' in  validated_data):
            User.objects.filter(id=instance.user.id).update(is_upload_dossier=True)
            instance.dossier_archivo = validated_data['dossier_archivo']

        return super(ProfileModelSerializer, self).update(instance,
                validated_data)

    def create(self, data):
        User.objects.filter(id=data['user'].id).update(is_verified=True)
        Profile.objects.create(**data)
        return data
    
class UserModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = (
            'id',
            'first_name',
            'last_name',
            'username',
            'phone_number',
            'email',
            'type_user1',
            'type_user2',
            'type_user3',
            'principal_image',
            'country',
            'region',
            'province',
            'commune',
            'is_active',
            'is_verified'    
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
        validators=[UniqueValidator(queryset=User.objects.all())]
    )

    username = serializers.CharField(
        min_length = 4,
        max_length = 20,
        validators=[UniqueValidator(User.objects.all())]
    )

    phone_number = serializers.CharField(
        max_length = 17,
        validators=[UniqueValidator(User.objects.all())]
    )

    first_name = serializers.CharField()
    last_name = serializers.CharField()
    country = serializers.CharField()
    region = serializers.CharField()
    province = serializers.CharField(allow_null=True, required=False)
    commune = serializers.CharField(allow_null=True, required=False)

    TYPES_USERS = [
        ('AM','Artista / Manager'),
        ('GE','General'),
        ('R','Relator'),
        ('GES','Gestión'), # Cultural/Producción/Programación
        ('PROV','Proveedor'), # (transporte, técnica, catering, otros)
        ('RE','Representante'), #  de organización o empresa, pública o privada
        ('PRO','Profesional asociado'), #  a las artes escénicas (diseñador gráfico/a, escenógrafo/a, sonido, iluminación, comunicación, audiovisualista, fotógrafo/a, maquillador/a, vestuarista, otros)
        ('ADM', 'Administrador de sistema')
    ]

    type_user1 = serializers.ChoiceField(choices=TYPES_USERS)
    type_user2 = serializers.ChoiceField(choices=TYPES_USERS, allow_null=True, required=False)
    type_user3 = serializers.ChoiceField(choices=TYPES_USERS, allow_null=True, required=False)

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
        return user

