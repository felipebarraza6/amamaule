from django.contrib import admin

from apps.transmissions.models import Transmission, Comment, Invitation


@admin.register(Transmission)
class TransmissionAdmin(admin.ModelAdmin):
    list_display = ('uuid', 'title')

@admin.register(Comment)
class CommentAdmin(admin.ModelAdmin):
    list_display = ('transmission', 'user')

@admin.register(Invitation)
class InvitationAdmin(admin.ModelAdmin):
    list_display = ('uuid', 'user', 'transmission')



