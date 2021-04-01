from django.db import models
from apps.utilities.models import APIModel


class ViewingSelected(APIModel):
    user = models.ForeignKey("users.User", on_delete=models.CASCADE)
    file_vw = models.FileField(upload_to='file_viwings/' ,blank=True, null=True, max_length=700)
    url_vw = models.URLField(max_length=1200, blank=True, null=True)
    message = models.TextField(max_length=1200, blank=True, null=True)


    def __str__(self):
        return str(self.user)


class Comment(APIModel):
    viwing = models.ForeignKey(ViewingSelected, on_delete=models.CASCADE, related_name='comment_viewing')
    user = models.ForeignKey("users.User", on_delete=models.CASCADE, related_name='comment_user')
    comment = models.TextField(max_length=1200)

    def __str__(self):
        return str(self.user)
