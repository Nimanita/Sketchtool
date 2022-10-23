from django.conf.urls import url
from sketches.consumers import sketchToolConsumer

websocket_urlpatterns = [
    url('', sketchToolConsumer.as_asgi()),
]