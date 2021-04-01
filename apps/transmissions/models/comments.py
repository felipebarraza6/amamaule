from django.db import models
from .transmissions import Transmission
from apps.utilities.models import APIModel
from apps.users.models import User


class Comment(APIModel):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    transmission = models.ForeignKey(Transmission, on_delete=models.CASCADE)    
    message = models.TextField(max_length=450)
    is_active = models.BooleanField(default=False)

    def __str__(self):
        return str(self.user)
    