"User Model."

from django.db import models
from django.contrib.auth.models import AbstractUser
from django.core.validators import RegexValidator
from apps.utilities.models import APIModel


class User(APIModel, AbstractUser):

    TYPES_USERS = [
        ('GES','gestor/a cultural, programador/a o similar'),
        ('AR','artista escénico o representante '),       
        ('AV','artista de la visualidad '), 
        ('PT','profesional o trabajador relacionado a las artes escénicas o de la visualidad'), 
        ('PS','proveedor/a de bienes y servicios asociados'),
        ('OPP','organización pública o privada'), 
        ('ADM', 'Administrador de sistema')
    ]

    type_user = models.CharField(
        max_length=4,
        choices=TYPES_USERS,    
        blank=True, null=True
    )

    email = models.EmailField(
        'email',
        unique = True
    )

    phone_regex = RegexValidator(
        regex=r'\+?1?\d{9,15}$',
        message="Phone number must be entered in the format: +999999999. Up to 15 digits allowed."
    )
    phone_number = models.CharField(validators=[phone_regex], max_length=17, blank=True, unique=True)    

    country = models.CharField(max_length=50)
    region = models.CharField(max_length=120)
    province = models.CharField(max_length=120, null=True, blank=True)
    commune = models.CharField(max_length=120, null=True, blank=True)

    is_active = models.BooleanField(default=True)
    is_upload_dossier = models.BooleanField(default=False)
    is_verified = models.BooleanField(default=False)


    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = [
        'username', 
        'first_name', 
        'last_name', 
        'phone_number', 
        'country', 
        'region', 
        'type_user',
    ]


    def __str__(self):
        """Return username."""
        return self.username

    def get_short_name(self):
        """Return username."""
        return self.username
