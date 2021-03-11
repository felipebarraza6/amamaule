"User Model."

from django.db import models
from django.contrib.auth.models import AbstractUser
from django.core.validators import RegexValidator
from apps.utilities.models import APIModel


class User(APIModel, AbstractUser):

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

    type_user1 = models.CharField(
        max_length=4,
        choices=TYPES_USERS,    
    )

    type_user2 = models.CharField(
        max_length=4,
        choices=TYPES_USERS,
        blank=True,
        null=True
    )

    type_user3 = models.CharField(
        max_length=4,
        choices=TYPES_USERS,        
        blank=True,
        null=True
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
    principal_image = models.ImageField()

    country = models.CharField(max_length=50)
    region = models.CharField(max_length=120)
    province = models.CharField(max_length=120, null=True, blank=True)
    commune = models.CharField(max_length=120, null=True, blank=True)

    is_active = models.BooleanField(default=True)
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