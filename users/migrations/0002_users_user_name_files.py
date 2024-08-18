# Generated by Django 5.0.7 on 2024-08-14 23:00

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='users',
            name='user_name',
            field=models.CharField(default='marcos', max_length=200),
            preserve_default=False,
        ),
        migrations.CreateModel(
            name='Files',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('pages', models.IntegerField()),
                ('file', models.FileField(blank=True, null=True, upload_to='pdfs/')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='files', to='users.users')),
            ],
        ),
    ]
