# Generated by Django 3.0 on 2023-04-28 02:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='imageURL',
            field=models.CharField(default='https://aseshop.kz/uploads/default/no-image.jpg', max_length=100),
            preserve_default=False,
        ),
    ]
