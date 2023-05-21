# Generated by Django 4.2.1 on 2023-05-21 13:45

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0019_alter_company_data_criacao_alter_company_id_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='doc',
            name='company_associada',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='documentos_associados_doc', to='core.company'),
        ),
        migrations.AlterField(
            model_name='doc',
            name='usuario_criador',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='documentos_criados', to='core.user'),
        ),
    ]