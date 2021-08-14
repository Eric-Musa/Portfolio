from django.urls import path

from . import views

app_name = 'api'
urlpatterns = [
    path('', views.test, name='test'),
    # path('do_not_click/', views.do_not_click, name='do_not_click'),
    # path('fluid_sim/', views.fluid_sim, name='fluid_sim'),
]