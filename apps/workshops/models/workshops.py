from django.db import models
from apps.utilities.models import APIModel
from django.contrib.postgres.fields import ArrayField

class Workshop(APIModel):    
    title = models.CharField(max_length=1200, blank=True, null=True)
    description = models.TextField(max_length=1200, blank=True, null=True)
    rapporteurs = models.TextField(max_length=1200, blank=True, null=True)
    principal_image = models.ImageField(blank=True, null=True)
    url_zoom = models.CharField(max_length=1200, blank=True, null=True)
    date = models.DateTimeField(blank=True, null=True)
    is_digital = models.BooleanField(default=False)
    is_active = models.BooleanField(default=False)
    is_end = models.BooleanField(default=False)
    maximum_quota = models.IntegerField(blank=True, null=True)
    inscribed =  ArrayField(models.CharField(max_length=1000, blank=True, null=True), default=list, blank=True, null =True)
    duration = models.CharField(max_length=1200, blank=True, null=True) 
    location = models.CharField(max_length=1200, blank=True, null=True)    
    date_text = models.CharField(max_length=1200, blank=True, null=True)    

    def __str__(self):
        return str(self.id)