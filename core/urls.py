from django.contrib import admin
from django.urls import path
from .views import home
from core.views import CompanyViewSet, DocViewSet, UserViewSet

urlpatterns = [
    path('', home)
]
