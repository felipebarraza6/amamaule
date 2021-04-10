from django.db import models
from .transmissions import Transmission
from apps.utilities.models import APIModel
from apps.users.models import User
import uuid


class Invitation(APIModel):
    uuid = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='invitation_user')
    transmission = models.ForeignKey(Transmission, on_delete=models.CASCADE)
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return str(self.uuid)
