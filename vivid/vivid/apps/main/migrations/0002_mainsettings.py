# Generated by Django 2.2.6 on 2019-10-23 09:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='MainSettings',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('banner', models.FileField(blank=True, null=True, upload_to='', verbose_name='Баннер')),
                ('title', models.CharField(blank=True, max_length=500, null=True, verbose_name='Заголовок')),
                ('desc', models.TextField(blank=True, null=True, verbose_name='Описание')),
                ('video', models.FileField(blank=True, null=True, upload_to='', verbose_name='Видео\xa0')),
            ],
            options={
                'verbose_name': 'Настройки',
                'verbose_name_plural': 'Настройки',
            },
        ),
    ]
