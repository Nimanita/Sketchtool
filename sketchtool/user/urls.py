from django.urls import path, include

from .views import userView

urlpatterns = [
    path('user', userView.handleUserOperation),
    path('user/login', userView.handleUserLogin),
    
]