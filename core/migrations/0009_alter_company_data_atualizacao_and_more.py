# Generated by Django 4.2.1 on 2023-05-18 19:13

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0008_alter_company_data_criacao'),
    ]

    operations = [
        migrations.AlterField(
            model_name='company',
            name='data_atualizacao',
            field=models.DateTimeField(auto_now=True),
        ),
        migrations.AlterField(
            model_name='company',
            name='documentos_associados',
            field=models.ManyToManyField(blank=True, related_name='companhias_associadas', to='core.doc'),
        ),
        migrations.AlterField(
            model_name='company',
            name='usuario_criador',
            field=models.ForeignKey(blank=True, on_delete=django.db.models.deletion.CASCADE, related_name='companhias_criadas', to='core.user'),
        ),
        migrations.AlterField(
            model_name='company',
            name='usuarios_convidados',
            field=models.ManyToManyField(blank=True, related_name='companhias_convidadas', to='core.user'),
        ),
    ]