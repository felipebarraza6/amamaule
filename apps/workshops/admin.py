from django.contrib import admin

from apps.workshops.models import Workshop
from import_export.admin import ExportActionMixin


@admin.register(Workshop)
class UserAdmin(ExportActionMixin, admin.ModelAdmin):
    list_display = ('id', 'title',)



