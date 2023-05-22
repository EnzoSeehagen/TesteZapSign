# Generated by Django 4.2.1 on 2023-05-22 16:55

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0020_alter_doc_company_associada_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='data_criacao',
            field=models.DateTimeField(default=django.utils.timezone.now),
        ),
        migrations.AlterField(
            model_name='user',
            name='data_ultima_redefinicao_senha',
            field=models.DateTimeField(blank=True, default=django.utils.timezone.now),
        ),
    ]
