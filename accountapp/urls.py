from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from accountapp.views import hello_world

app_name = 'accountapp'


urlpatterns = [
    path('hello_world/', hello_world, name='hello world'),

] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)