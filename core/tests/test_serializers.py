from django.utils import timezone
import pytest
from core.models import Company, Doc, User
from core.serializer import CompanySerializer, DocSerializer, UserSerializer

@pytest.mark.django_db
def test_company_serializer():
    company = Company.objects.create(nome="Elih")
    serializer = CompanySerializer(company)
    assert serializer.data["nome"] == "Elih"

@pytest.mark.django_db
def test_doc_serializer():
    doc = Doc.objects.create(nome="boleto.pdf", data_criacao=timezone.now())
    serializer = DocSerializer(doc)
    assert serializer.data["nome"] == "boleto.pdf"

@pytest.mark.django_db
def test_user_serializer():
    user = User.objects.create(email="enzovonseehagen@gmail.com", senha="123456")
    serializer = UserSerializer(user)
    assert serializer.data["email"] == "enzovonseehagen@gmail.com"
