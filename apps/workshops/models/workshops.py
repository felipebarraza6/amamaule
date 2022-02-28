from django.db import models
from apps.utilities.models import APIModel


class Workshop(APIModel):    
    title = models.CharField(max_length=1200, blank=True, null=True)
    description = models.TextField(max_length=1200, blank=True, null=True)
    rapporteurs = models.TextField(max_length=1200, blank=True, null=True)
    principal_image = models.ImageField(blank=True, null=True)
    url_zoom = models.CharField(max_length=1200, blank=True, null=True)
    is_digital = models.BooleanField(default=False)
    is_active = models.BooleanField(default=False)
    is_end = models.BooleanField(default=False)

    def __str__(self):
        return str(self.id)