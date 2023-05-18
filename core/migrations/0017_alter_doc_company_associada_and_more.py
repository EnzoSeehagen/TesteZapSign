# Generated by Django 4.2.1 on 2023-05-18 20:08

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0016_alter_doc_assinado'),
    ]

    operations = [
        migrations.AlterField(
            model_name='doc',
            name='company_associada',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='documentos_associados_doc', to='core.company'),
        ),
        migrations.AlterField(
            model_name='doc',
            name='data_atualizacao',
            field=models.DateTimeField(auto_now=True),
        ),
        migrations.AlterField(
            model_name='doc',
            name='data_limite_assinatura',
            field=models.DateTimeField(),
        ),
        migrations.AlterField(
            model_name='doc',
            name='usuario_criador',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='documentos_criados', to='core.user'),
        ),
    ]
