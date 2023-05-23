from django.contrib import admin
from django.urls import include, path
from rest_framework import routers
from core.views import CompanyViewSet, DocViewSet, UserViewSet

router = routers.DefaultRouter()
router.register(r'company', CompanyViewSet, basename='company')
router.register(r'user', UserViewSet, basename='user')
router.register(r'doc', DocViewSet, basename='doc')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include(router.urls)),
]
