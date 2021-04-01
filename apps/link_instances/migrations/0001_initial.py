# Generated by Django 3.1.7 on 2021-03-28 02:26

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import uuid


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Meeting',
            fields=[
                ('created', models.DateTimeField(auto_now_add=True)),
                ('modified', models.DateTimeField(auto_now=True)),
                ('uuid', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('start_date', models.DateTimeField(blank=True, null=True)),
                ('end_date', models.DateTimeField(blank=True, null=True)),
                ('src_host', models.CharField(max_length=120, unique=True)),
                ('message_invited', models.TextField(blank=True, max_length=320, null=True)),
                ('is_validated', models.BooleanField(default=False)),
                ('is_active', models.BooleanField(default=False)),
                ('is_end', models.BooleanField(default=False)),
                ('is_programmatic_dialogues', models.BooleanField(default=False)),
                ('owner', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
                ('participans_invited', models.ManyToManyField(blank=True, related_name='metting_inviteds', to=settings.AUTH_USER_MODEL)),
                ('participans_validated', models.ManyToManyField(blank=True, related_name='metting_confimeds', to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'ordering': ['-created', '-modified'],
                'get_latest_by': ('created',),
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='Pool_answers',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('modified', models.DateTimeField(auto_now=True)),
                ('question', models.TextField(blank=True, max_length=400, null=True)),
                ('answer', models.TextField(blank=True, max_length=400, null=True)),
                ('meeting', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='link_instances.meeting')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'ordering': ['-created', '-modified'],
                'get_latest_by': ('created',),
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='Invitations',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('modified', models.DateTimeField(auto_now=True)),
                ('answer', models.BooleanField(default=False)),
                ('is_active', models.BooleanField(default=True)),
                ('invited', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
                ('meeting', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='link_instances.meeting')),
            ],
            options={
                'ordering': ['-created', '-modified'],
                'get_latest_by': ('created',),
                'abstract': False,
            },
        ),
    ]
