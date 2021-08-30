from django.urls import path

from . import views

app_name = 'frontend'
urlpatterns = [
    path('', views.react, name='react'),
    # path('', views.index, name='index'),
    # path('test', views.test, name='test'),
]