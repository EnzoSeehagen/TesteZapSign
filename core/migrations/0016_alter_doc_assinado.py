# Generated by Django 4.2.1 on 2023-05-18 20:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0015_alter_company_data_atualizacao'),
    ]

    operations = [
        migrations.AlterField(
            model_name='doc',
            name='assinado',
            field=models.BooleanField(default=False, editable=False),
        ),
    ]
