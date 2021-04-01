from django.db import models
from apps.utilities.models import APIModel
import uuid


class Transmission(APIModel):    

    choices = [
        ('T', 'talleres'),
        ('S', 'satelite'),
        ('C', 'conferencias'),
        ('MT', 'mesas_tematicas'),
        ('IC', 'intercambios_crativos'),        
        ('SC', 'showcases')
    ]

    uuid = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    title = models.CharField(max_length=120)
    description = models.TextField(max_length=700, blank=True, null=True)    
    main_image = models.ImageField(upload_to="transmission/main_images")
    image_overlock = models.ImageField(upload_to="transmission/main_images_overlock")  
    await_message = models.TextField(max_length=400, blank=True, null=True)    
    category = models.CharField(max_length=500, choices=choices)
    broadcast_date = models.DateTimeField(max_length=600, blank=True, null=True)    

    required_auth = models.BooleanField(default=False)
    is_live = models.BooleanField(default=False)
    count_view = models.IntegerField(default=0)

    # youtube streaming
    is_yt_stream = models.BooleanField(default=False)        
    yt_url = models.URLField(max_length=1200, blank=True, null=True)
    yt_api_key = models.CharField(max_length=60 ,blank=True, null=True)
    yt_api_secret = models.CharField(max_length=120, blank=True, null=True)

    # zoom streaming
    is_zoom_stream = models.BooleanField(default=False)    
    zoom_api_key = models.CharField(max_length=60 ,blank=True, null=True)
    zoom_api_secret = models.CharField(max_length=120, blank=True, null=True)
    zoom_meeting_number = models.CharField(max_length=40, blank=True, null=True)
    zoom_role = models.CharField(max_length=3, blank=True, null=True, default=0)
    zoom_passcode = models.CharField(max_length=40, blank=True, null=True)


    def __str__(self):
        return str(self.uuid)