# Generated by Django 5.1 on 2024-09-22 16:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('space', '0012_delete_signupdata'),
    ]

    operations = [
        migrations.CreateModel(
            name='Rocket',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('info', models.TextField()),
            ],
        ),
    ]
