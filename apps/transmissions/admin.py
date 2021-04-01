from django.contrib import admin

from apps.transmissions.models import Transmission, Comment


@admin.register(Transmission)
class TransmissionAdmin(admin.ModelAdmin):
    list_display = ('uuid', 'title')

@admin.register(Comment)
class CommentAdmin(admin.ModelAdmin):
    list_display = ('transmission', 'user')



