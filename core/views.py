from django.shortcuts import render
from rest_framework import viewsets
from core.models import Company, User, Doc
from core.serializer import CompanySerializer, UserSerializer, DocSerializer

def home(request):
    return render(request, 'home.html')


class CompanyViewSet(viewsets.ModelViewSet):
    """Exibindo todos as companhias"""
    queryset = Company.objects.all()
    serializer_class = CompanySerializer

class UserViewSet(viewsets.ModelViewSet):
    """Exibindo todos os usuários"""
    queryset = User.objects.all()
    serializer_class = UserSerializer


class DocViewSet(viewsets.ModelViewSet):
    """Exibindo todos os documentos"""
    queryset = Doc.objects.all()
    serializer_class = DocSerializer