# Generated by Django 3.1.7 on 2021-03-15 20:29

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0009_auto_20210314_1638'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='url_contenido',
            field=models.CharField(blank=True, max_length=1200, null=True),
        ),
        migrations.AlterField(
            model_name='profile',
            name='url_descarga',
            field=models.CharField(blank=True, max_length=1200, null=True),
        ),
        migrations.AlterField(
            model_name='profile',
            name='user',
            field=models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL, verbose_name='user_profile'),
        ),
        migrations.AlterField(
            model_name='user',
            name='principal_image',
            field=models.ImageField(blank=True, null=True, upload_to=''),
        ),
    ]
