# Generated by Django 4.1.7 on 2023-04-03 13:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('transmissions', '0008_alter_transmission_category'),
    ]

    operations = [
        migrations.AlterField(
            model_name='comment',
            name='id',
            field=models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID'),
        ),
    ]
