from django.core.validators import MinLengthValidator
from django.utils import timezone
from django.db import models



class Company(models.Model):
    LANGUAGE_CHOICES = (
        ('pt', 'Português'),
        ('es', 'Espanhol'),
        ('en', 'Inglês'),
    )

    id = models.AutoField(primary_key=True)
    nome = models.CharField(max_length=255)
    data_criacao = models.DateTimeField(default=timezone.now)

    data_atualizacao = models.DateTimeField(null=True, blank=True)
    fuso_horario = models.CharField(max_length=50, default="-03:00")
    linguagem = models.CharField(max_length=2, choices=LANGUAGE_CHOICES, default='pt')
    usuarios_convidados = models.ManyToManyField('User', related_name='companhias_convidadas', blank=True)
    usuario_criador = models.ForeignKey('User', on_delete=models.CASCADE, related_name='companhias_criadas', blank=True, null=True)

    documentos_associados = models.ManyToManyField('Doc', related_name='companhias_associadas', blank=True)


    def __str__(self):
        return self.nome


class Doc(models.Model):
    id = models.AutoField(primary_key=True)
    nome = models.CharField(max_length=255)
    deletado = models.BooleanField(default=False)
    data_criacao = models.DateTimeField(blank=False, null=False)
    data_atualizacao = models.DateTimeField(null=True, blank=True)
    data_limite_assinatura = models.DateTimeField(blank=True, null=True)
    assinado = models.BooleanField(default=False)
    company_associada = models.ForeignKey('Company', on_delete=models.CASCADE, related_name='documentos_associados_doc')
    usuario_criador = models.ForeignKey('User', on_delete=models.CASCADE, related_name='documentos_criados')

    def save(self, *args, **kwargs):
        self.data_atualizacao = timezone.now()
        super().save(*args, **kwargs)

    def assinar(self):
        if not self.assinado:
            self.assinado = True
            self.save()


    def __str__(self):
        return self.nome
    




class User(models.Model):
    id = models.AutoField(primary_key=True)
    email = models.EmailField(max_length=255)
    data_ultima_redefinicao_senha = models.DateTimeField(null=True, blank=True)
    email_verificado = models.BooleanField(default=False)
    senha = models.CharField(max_length=255, validators=[MinLengthValidator(6)])
    data_criacao = models.DateTimeField(null=True, blank=False)
    data_atualizacao = models.DateTimeField(null=True, blank=True)
    companhias_associadas = models.ManyToManyField('Company', related_name='usuarios_associados', blank=True)
    companhia_original = models.ForeignKey('Company', on_delete=models.CASCADE, related_name='usuarios_originais', null=True, blank=True)
    documentos_associados = models.ManyToManyField('Doc', related_name='usuarios_associados', blank=True)

    def save(self, *args, **kwargs):
        if not self.id:
            self.data_criacao = timezone.now()
        self.data_atualizacao = timezone.now()
        super().save(*args, **kwargs)

    
    def __str__(self):
        return self.email


