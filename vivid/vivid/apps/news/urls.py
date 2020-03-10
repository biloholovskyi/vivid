from django.urls import path

from . import views

app_name = 'news'
urlpatterns = [
    path('', views.index, name='index'),
    path("<int:article_id>/", views.article, name="article"),
    path('stocks/', views.stocks, name="stocks"),
    path('company/', views.company, name="company"),
    path('smi/', views.smi, name="smi"),
]