# Generated by Django 2.2.5 on 2019-10-10 08:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('business', '0021_auto_20191010_1154'),
    ]

    operations = [
        migrations.AddField(
            model_name='pageforpartners',
            name='contacts_name',
            field=models.CharField(blank=True, max_length=500, null=True, verbose_name='Название контакта'),
        ),
        migrations.AddField(
            model_name='pagerestaurant',
            name='contacts_name',
            field=models.CharField(blank=True, max_length=500, null=True, verbose_name='Название контакта'),
        ),
        migrations.AddField(
            model_name='pageretail',
            name='contacts_name',
            field=models.CharField(blank=True, max_length=500, null=True, verbose_name='Название контакта'),
        ),
    ]
