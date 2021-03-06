# Generated by Django 3.1.7 on 2021-03-12 05:28

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0005_auto_20210311_1621'),
    ]

    operations = [
        migrations.CreateModel(
            name='Profile',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('modified', models.DateTimeField(auto_now=True)),
                ('disciplina', models.CharField(blank=True, max_length=800, null=True)),
                ('tipo_proveedor', models.CharField(blank=True, max_length=800, null=True)),
                ('tipo_profesional', models.CharField(blank=True, max_length=800, null=True)),
                ('nombre_entidad', models.CharField(blank=True, max_length=800, null=True)),
                ('cargo', models.CharField(blank=True, max_length=800, null=True)),
                ('perfil_profesional', models.TextField(blank=True, max_length=800, null=True)),
                ('dossier_archivo', models.FileField(blank=True, null=True, upload_to='')),
                ('genero', models.CharField(blank=True, max_length=800, null=True)),
                ('url_contenido', models.URLField(blank=True, max_length=1200, null=True)),
                ('taller_pitching', models.BooleanField(blank=True, default=False, null=True)),
                ('taller_montaje', models.BooleanField(blank=True, default=False, null=True)),
                ('taller_ley_de_donaciones', models.BooleanField(blank=True, default=False, null=True)),
                ('taller_marketing_digital', models.BooleanField(blank=True, default=False, null=True)),
                ('taller_herr_gestion', models.BooleanField(blank=True, default=False, null=True)),
                ('taller_financiamiento', models.BooleanField(blank=True, default=False, null=True)),
                ('nombre_propuesta', models.CharField(blank=True, max_length=800, null=True)),
                ('resena_propuesta', models.TextField(blank=True, max_length=800, null=True)),
                ('resena_nombre_integrantes', models.CharField(blank=True, max_length=800, null=True)),
                ('anio_estreno', models.CharField(blank=True, max_length=800, null=True)),
                ('formato_ex', models.CharField(blank=True, max_length=800, null=True)),
                ('url_descarga', models.URLField(blank=True, max_length=1200, null=True)),
                ('is_aproved_visio', models.BooleanField(blank=True, default=False, null=True)),
                ('is_send_visio', models.BooleanField(blank=True, default=False, null=True)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL, verbose_name='user_profile')),
            ],
            options={
                'ordering': ['-created', '-modified'],
                'get_latest_by': ('created',),
                'abstract': False,
            },
        ),
    ]
