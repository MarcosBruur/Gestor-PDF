# Generated by Django 5.0.7 on 2024-09-18 20:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_file'),
    ]

    operations = [
        migrations.AlterField(
            model_name='file',
            name='pages',
            field=models.IntegerField(null=True),
        ),
    ]
