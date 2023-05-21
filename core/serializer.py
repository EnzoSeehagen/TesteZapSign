from rest_framework import serializers
from core.models import User, Company, Doc

class CompanySerializer(serializers.ModelSerializer):
    class Meta:
        model = Company
        fields = ["id", "nome", "data_criacao", "data_atualizacao",
                  "fuso_horario", "linguagem", "usuarios_convidados",
                  "usuario_criador", "documentos_associados"
                  ]
        
class DocSerializer(serializers.ModelSerializer):
    class Meta:
        model = Doc
        fields = ["id", "nome", "deletado", "data_criacao",
                  "data_atualizacao", "data_limite_assinatura", "assinado",
                  "company_associada", "usuario_criador"
                  ]

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "email", "data_ultima_redefinicao_senha", "email_verificado",
                  "senha", "data_criacao", "data_atualizacao",
                  "companhias_associadas", "companhia_original",
                  "documentos_associados"
                  ]
