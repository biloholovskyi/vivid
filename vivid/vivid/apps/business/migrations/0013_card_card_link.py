# Generated by Django 2.2.5 on 2019-10-06 10:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('business', '0012_pagerestaurant'),
    ]

    operations = [
        migrations.AddField(
            model_name='card',
            name='card_link',
            field=models.CharField(max_length=200, null=True, verbose_name='Ссылка'),
        ),
    ]
