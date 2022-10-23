from django.urls import path, include

from .views import sketchView

urlpatterns = [
    path('operation', sketchView.handleSketchOperation),
    
    
]