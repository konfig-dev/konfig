from django.urls import re_path

from . import consumers

websocket_urlpatterns = [
    re_path(r"ws/guide/(?P<chat_id>[a-f0-9\-]+)/$", consumers.GuideConsumer.as_asgi()),
]
