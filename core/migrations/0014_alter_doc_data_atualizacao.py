# Generated by Django 4.2.1 on 2023-05-18 19:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0013_alter_doc_company_associada_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='doc',
            name='data_atualizacao',
            field=models.DateTimeField(blank=True, null=True),
        ),
    ]