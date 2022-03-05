# Generated by Django 4.0.3 on 2022-03-04 17:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('workshops', '0004_workshop_date'),
    ]

    operations = [
        migrations.AddField(
            model_name='workshop',
            name='duration',
            field=models.CharField(blank=True, max_length=1200, null=True),
        ),
        migrations.AddField(
            model_name='workshop',
            name='location',
            field=models.CharField(blank=True, max_length=1200, null=True),
        ),
        migrations.AlterField(
            model_name='workshop',
            name='date',
            field=models.DateTimeField(blank=True, null=True),
        ),
    ]
