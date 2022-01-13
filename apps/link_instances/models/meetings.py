from django.db import models
from apps.utilities.models import APIModel
import uuid


class Meeting(APIModel):    
    uuid = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    owner = models.ForeignKey("users.User", on_delete=models.CASCADE) 
    start_date = models.DateTimeField(blank=True, null=True)
    end_date = models.DateTimeField(blank=True, null=True)
    src_host = models.CharField(max_length=720, blank=True, null=True)
    message_invited = models.TextField(max_length=320, blank=True, null=True)
    participans_invited = models.ManyToManyField("users.User", blank=True, related_name='metting_inviteds')
    participans_validated = models.ManyToManyField("users.User", blank=True, related_name='metting_confimeds')
    is_validated = models.BooleanField(default=False)
    is_active = models.BooleanField(default=False)
    is_end = models.BooleanField(default=False)
    is_programmatic_dialogues = models.BooleanField(default=False)

    def __str__(self):
        return str(self.uuid)
    

class Invitation(APIModel):
    meeting = models.ForeignKey(Meeting, on_delete=models.CASCADE)
    invited = models.ForeignKey("users.User", on_delete=models.CASCADE)
    answer = models.BooleanField(default=False)
    message = models.TextField(max_length=800, blank=True, null=True)
    is_active = models.BooleanField(default=True)


    def __str__(self):
        return str(self.meeting)

