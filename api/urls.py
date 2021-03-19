from django.contrib import admin
from django.urls import path
from django.conf import settings
from django.conf.urls import url, include
from django.conf.urls.static import static


urlpatterns = [
    path(r'admin/', admin.site.urls),
    path(r'users/', include('apps.users.routers'))
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
