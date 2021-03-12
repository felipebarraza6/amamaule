from django.contrib import admin

from apps.users.models import User, Profile


@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    list_display = ('id', 'first_name', 'last_name')

@admin.register(Profile)
class UserAdmin(admin.ModelAdmin):
    list_display = ('id', 'user')
