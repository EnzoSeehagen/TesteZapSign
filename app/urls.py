from django.contrib import admin
from django.urls import include, path
from core.views import CompanyViewSet, DocViewSet, UserViewSet
from rest_framework import routers

router = routers.DefaultRouter()
router.register('company', CompanyViewSet, basename="Company")
router.register('user', UserViewSet, basename="User")
router.register('doc', DocViewSet, basename="Doc")

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include(router.urls)),
    
]
