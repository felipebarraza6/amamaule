from django.contrib import admin
from apps.link_instances.models import (Invitation, 
                                        Meeting)


@admin.register(Invitation)
class InvitednAdmin(admin.ModelAdmin):
    list_display = ('invited',)

@admin.register(Meeting)
class MeetingAdmin(admin.ModelAdmin):
    list_display = ('uuid', 'start_date', 'is_validated', 'is_active', 'is_programmatic_dialogues')




