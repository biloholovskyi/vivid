from django.urls import path

from . import views

app_name = 'about'
urlpatterns = [
    path('', views.index, name='index'),
    path('oil/', views.page_oil, name='page'),
    path('team/', views.page_team, name='page'),
    path('production/', views.page_production, name='page'),
    path('career/', views.page_career, name='page'),
]
