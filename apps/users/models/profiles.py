from django.db import models
from .users import User
from apps.utilities.models import APIModel

class Profile(APIModel):
    user = models.OneToOneField("users.User", verbose_name=("user_profile"), on_delete=models.CASCADE)
    disciplina = models.CharField(max_length=800, blank=True, null=True)
    genero = models.CharField(max_length=800, blank=True, null=True)
    tipo_proveedor = models.CharField(max_length=800, blank=True, null=True)
    tipo_profesional = models.CharField(max_length=800, blank=True, null=True)
    nombre_entidad = models.CharField(max_length=800, blank=True, null=True)
    cargo = models.CharField(max_length=800, blank=True, null=True)
    perfil_profesional = models.TextField(max_length=800, blank=True, null=True)
    dossier_archivo = models.FileField(blank=True, null=True)
    genero = models.CharField(max_length=800, blank=True, null=True)
    url_contenido = models.CharField(max_length=1200, blank=True, null=True) 

    taller_pitching = models.BooleanField(default=False, blank=True, null=True)
    formato_proyecto = models.CharField(max_length=400, blank=True, null=True)
    etapada_proyecto = models.CharField(max_length=400, blank=True, null=True)
    elemento_diferenciador = models.CharField(max_length=400, blank=True, null=True)
    taller_montaje = models.BooleanField(default=False, blank=True, null=True)
    taller_ley_de_donaciones = models.BooleanField(default=False, blank=True, null=True)
    taller_marketing_digital = models.BooleanField(default=False, blank=True, null=True)
    taller_herr_gestion = models.BooleanField(default=False, blank=True, null=True)
    taller_financiamiento = models.BooleanField(default=False, blank=True, null=True)

    resena_postulante = models.CharField(max_length=800, blank=True, null=True) 
    nombre_propuesta = models.CharField(max_length=800, blank=True, null=True)
    resena_propuesta = models.TextField(max_length=800, blank=True, null=True)
    resena_nombre_integrantes = models.CharField(max_length=800, blank=True, null=True)
    anio_creacion_propuesta = models.CharField(max_length=800, blank=True, null=True)
    anio_estreno = models.CharField(max_length=800, blank=True, null=True)
    formato_ex = models.CharField(max_length=800, blank=True, null=True)
    url_descarga = models.CharField(max_length=1200, blank=True, null=True) 

    is_aproved_visio = models.BooleanField(default=False, blank=True, null=True)
    is_send_visio = models.BooleanField(default=False, blank=True, null=True)

    def __str__(self):
        return str(self.user)
