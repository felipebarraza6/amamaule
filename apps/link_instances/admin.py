from django.contrib import admin
from apps.link_instances.models import (Invitation, 
                                        Meeting, TableMeeting)
from import_export.admin import ExportActionMixin

@admin.register(Invitation)
class InvitednAdmin(ExportActionMixin, admin.ModelAdmin):
    list_display = ('invited',)

@admin.register(Meeting)
class MeetingAdmin(ExportActionMixin, admin.ModelAdmin):
    list_display = ('uuid', 'start_date', 'is_validated', 'is_active', 'is_programmatic_dialogues')

@admin.register(TableMeeting)
class MeetingAdmin(ExportActionMixin, admin.ModelAdmin):
    list_display = ('id', )



