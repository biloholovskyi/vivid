from django.urls import path

from . import views

app_name = 'business'
urlpatterns = [
    path('', views.index, name='index'),
    path('partner/', views.page_partner, name='page'),
    path('retail/', views.page_retail, name='page'),
    path('restaurant/', views.page_restaurant, name='page'),
]