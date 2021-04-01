from django.contrib import admin
from apps.link_instances.models import (Invitation, 
                                        Meeting, 
                                        Pool_answers)


@admin.register(Invitation)
class InvitednAdmin(admin.ModelAdmin):
    list_display = ('invited',)

@admin.register(Meeting)
class MeetingAdmin(admin.ModelAdmin):
    list_display = ('owner',)

@admin.register(Pool_answers)
class Pool_answersAdmin(admin.ModelAdmin):
    list_display = ('meeting',)




