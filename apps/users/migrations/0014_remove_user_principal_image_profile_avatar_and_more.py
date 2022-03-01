# Generated by Django 4.0.2 on 2022-02-21 17:20

import django.contrib.postgres.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0013_rename_dossier_archivo_profile_dossier_file_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='user',
            name='principal_image',
        ),
        migrations.AddField(
            model_name='profile',
            name='avatar',
            field=models.ImageField(blank=True, null=True, upload_to=''),
        ),
        migrations.AlterField(
            model_name='profile',
            name='options_profile',
            field=django.contrib.postgres.fields.ArrayField(base_field=models.CharField(blank=True, max_length=1000, null=True), blank=True, default=list, null=True, size=None),
        ),
        migrations.AlterField(
            model_name='profile',
            name='what_looking',
            field=django.contrib.postgres.fields.ArrayField(base_field=models.CharField(blank=True, max_length=1000, null=True), blank=True, default=list, null=True, size=None),
        ),
    ]