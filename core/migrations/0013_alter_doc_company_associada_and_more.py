# Generated by Django 4.2.1 on 2023-05-18 19:56

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0012_alter_doc_data_limite_assinatura'),
    ]

    operations = [
        migrations.AlterField(
            model_name='doc',
            name='company_associada',
            field=models.ForeignKey(blank=True, on_delete=django.db.models.deletion.CASCADE, related_name='documentos_associados_doc', to='core.company'),
        ),
        migrations.AlterField(
            model_name='doc',
            name='usuario_criador',
            field=models.ForeignKey(blank=True, on_delete=django.db.models.deletion.CASCADE, related_name='documentos_criados', to='core.user'),
        ),
    ]
