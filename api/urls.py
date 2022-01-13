from django.contrib import admin
from django.urls import path
from django.conf import settings
from django.conf.urls import include
from django.conf.urls.static import static


urlpatterns = [
    
    path(r'admin/', admin.site.urls),
    path(r'users/', include('apps.users.routers')),

    path(r'transmissions/', include('apps.transmissions.routers.transmissions')),
    path(r'transmissions-comments/', include('apps.transmissions.routers.comments')),
    path(r'invitations/', include('apps.transmissions.routers.invitations')),

    path(r'selected_viewings/', include('apps.selected_viewings.routers')),

    path(r'meetings/', include('apps.link_instances.routers.meetings')),
    path(r'meetings-invitations/', include('apps.link_instances.routers.invitations')),

] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
