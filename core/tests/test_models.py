from django.utils import timezone
import pytest
from core.models import Company, Doc, User

@pytest.mark.django_db
def test_company_creation():
    company = Company.objects.create(nome="EnzoEmpresa")
    assert company.nome == "EnzoEmpresa"

@pytest.mark.django_db
def test_doc_assinar():
    doc = Doc.objects.create(nome="boleto.pdf", data_criacao=timezone.now())
    doc.assinar()
    assert doc.assinado

@pytest.mark.django_db
def test_user_creation():
    user = User.objects.create(email="enzovonseehagen@gmail.com", senha="123456")
    assert user.email == "enzovonseehagen@gmail.com"
