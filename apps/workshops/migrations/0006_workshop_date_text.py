# Generated by Django 4.0.3 on 2022-03-05 05:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('workshops', '0005_workshop_duration_workshop_location_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='workshop',
            name='date_text',
            field=models.CharField(blank=True, max_length=1200, null=True),
        ),
    ]
