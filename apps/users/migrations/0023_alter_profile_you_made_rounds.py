# Generated by Django 4.1.7 on 2023-04-05 16:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0022_alter_profile_you_made_rounds'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='you_made_rounds',
            field=models.TextField(blank=True, max_length=1200, null=True),
        ),
    ]