# Generated by Django 4.0.3 on 2022-03-04 17:36

import django.contrib.postgres.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('workshops', '0002_workshop_maximum_quota'),
    ]

    operations = [
        migrations.AddField(
            model_name='workshop',
            name='inscribed',
            field=django.contrib.postgres.fields.ArrayField(base_field=models.CharField(blank=True, max_length=1000, null=True), blank=True, default=list, null=True, size=None),
        ),
    ]