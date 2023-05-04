# Generated by Django 3.0 on 2023-04-28 03:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_auto_20230428_0920'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='email',
            field=models.CharField(blank=True, max_length=100),
        ),
        migrations.AlterField(
            model_name='user',
            name='firstName',
            field=models.CharField(blank=True, default='FirstName', max_length=100),
        ),
        migrations.AlterField(
            model_name='user',
            name='lastName',
            field=models.CharField(blank=True, default='LastName', max_length=100),
        ),
        migrations.AlterField(
            model_name='user',
            name='password',
            field=models.CharField(blank=True, max_length=100),
        ),
        migrations.AlterField(
            model_name='user',
            name='phoneNumber',
            field=models.CharField(blank=True, default='PhoneNumber', max_length=100),
        ),
    ]