# Generated by Django 3.0 on 2023-04-28 03:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_product_imageurl'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='firstName',
            field=models.CharField(default='FirstName', max_length=100),
        ),
        migrations.AddField(
            model_name='user',
            name='lastName',
            field=models.CharField(default='LastName', max_length=100),
        ),
        migrations.AddField(
            model_name='user',
            name='phoneNumber',
            field=models.CharField(default='PhoneNumber', max_length=100),
        ),
    ]