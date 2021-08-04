from django.urls import path

from . import views

app_name = 'mainsite'
urlpatterns = [
    path('', views.index, name='index'),
    path('do_not_click/', views.do_not_click, name='do_not_click'),
    path('fluid_sim/', views.fluid_sim, name='fluid_sim'),
]