from django.contrib import admin

from apps.selected_viewings.models import ViewingSelected, Comment


@admin.register(ViewingSelected)
class ViewingSelectednAdmin(admin.ModelAdmin):
    list_display = ('user',)

@admin.register(Comment)
class CommentSelectednAdmin(admin.ModelAdmin):
    list_display = ('user',)



