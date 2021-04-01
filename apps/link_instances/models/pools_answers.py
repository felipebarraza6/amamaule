from django.db import models
from apps.utilities.models import APIModel
from .meetings import Meeting

class Pool_answers(APIModel):
    meeting = models.ForeignKey(Meeting, on_delete=models.CASCADE)
    user = models.ForeignKey("users.User", on_delete=models.CASCADE)
    question = models.TextField(max_length=400, blank=True, null=True)
    answer = models.TextField(max_length=400, blank=True, null=True)

    def __str__(self):
        return str(self.meeting)