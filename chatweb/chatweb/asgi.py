"""
ASGI config for chatweb project.

It exposes the ASGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/4.1/howto/deployment/asgi/
"""

import os
import django
from channels.routing import ProtocolTypeRouter, URLRouter
from channels.auth import AuthMiddlewareStack
from django.core.asgi import get_asgi_application
import chatapp.routing  # ✅ your actual app name

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "chatweb.settings")
django.setup()

application = ProtocolTypeRouter({
    "http": get_asgi_application(),
    "websocket": AuthMiddlewareStack(
        URLRouter(chatapp.routing.websocket_urlpatterns)
    ),
})

# Url router will examine the http path of the connection to route it to a particular consumer based on provided url pattern
# AuthMiddlewareStack will populate the connection's scope with a reference to the currently authenticated user ,(Similiar to django's request)
# ProtocolTypeRouter - it inspect the type of connection , if it is a websocket connection (ws:// or wss://) then connection will be given to the AuthMiddlewareStack
