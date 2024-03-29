# Generated by Django 2.2.5 on 2019-10-07 08:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blocks', '0002_advantages'),
    ]

    operations = [
        migrations.CreateModel(
            name='RetailOil',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=500, null=True, verbose_name='Название')),
                ('img', models.FileField(blank=True, null=True, upload_to='', verbose_name='Изображение')),
                ('price', models.CharField(max_length=500, null=True, verbose_name='Цена')),
                ('minimum', models.CharField(max_length=100, null=True, verbose_name='Минимальная партия')),
                ('size', models.CharField(max_length=100, null=True, verbose_name='Объем')),
                ('desc', models.TextField(verbose_name='Другие характеристики')),
            ],
            options={
                'verbose_name': 'Ассортимент для розницы',
                'verbose_name_plural': 'Ассортимент для розницы',
            },
        ),
    ]
