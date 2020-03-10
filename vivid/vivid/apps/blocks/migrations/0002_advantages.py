# Generated by Django 2.2.5 on 2019-10-06 20:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blocks', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Advantages',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=500, null=True, verbose_name='Название')),
                ('img', models.FileField(blank=True, null=True, upload_to='', verbose_name='Логотип')),
                ('desc', models.TextField(verbose_name='Описание')),
            ],
            options={
                'verbose_name': 'Преимущество',
                'verbose_name_plural': 'Преимущества',
            },
        ),
    ]
