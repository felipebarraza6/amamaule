from django.db import models
from .users import User
from apps.utilities.models import APIModel
from django.contrib.postgres.fields import ArrayField

class Profile(APIModel):
    user = models.OneToOneField("users.User", verbose_name=("user_profile"), on_delete=models.CASCADE)
    avatar = models.ImageField(blank=True, null=True)
    options_profile = ArrayField(models.CharField(max_length=1000, blank=True, null=True), default=list, blank=True, null =True)
    website = models.CharField(max_length=1200, blank=True, null=True)
    review = models.CharField(max_length=1200, blank=True, null=True)
    dossier_file = models.FileField(blank=True, null=True)
    url_dossier = models.CharField(max_length=1200, blank=True, null=True)
    participated_in_last_edition = models.CharField(max_length=300, blank=True, null=True) 
    you_made_rounds = models.BooleanField(default=False)
    what_looking =  ArrayField(models.CharField(max_length=1000, blank=True, null=True), default=list, blank=True, null =True)
    preference_ges = ArrayField(models.CharField(max_length=1000, blank=True, null=True), default=list, blank=True, null =True) 
    review = models.TextField(max_length=1200, null=True, blank=True) 
    how_do_you_participate = models.CharField(max_length=1200, blank=True, null=True) 
    need_cholarship = models.CharField(max_length=1200, blank=True, null=True)  

    ae_24_inscribed =  ArrayField(models.CharField(max_length=1000, blank=True, null=True), default=list, blank=True, null =True)
    ae_25_inscribed =  ArrayField(models.CharField(max_length=1000, blank=True, null=True), default=list, blank=True, null =True)
    ae_26_inscribed =  ArrayField(models.CharField(max_length=1000, blank=True, null=True), default=list, blank=True, null =True)

    av_programmers =  ArrayField(models.CharField(max_length=1000, blank=True, null=True), default=list, blank=True, null =True)
    av_25_artists =  ArrayField(models.CharField(max_length=1000, blank=True, null=True), default=list, blank=True, null =True)



    def __str__(self):
        return str(self.user)
