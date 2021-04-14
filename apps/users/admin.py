from django.contrib import admin

from apps.users.models import User, Profile
from import_export.admin import ExportActionMixin


@admin.register(User)
class UserAdmin(ExportActionMixin, admin.ModelAdmin):
    list_display = ('id', 'first_name', 'last_name', 'username', 'email')


@admin.register(Profile)
class ProfileAdmin(ExportActionMixin, admin.ModelAdmin):
    list_display = ('id', 'user')
