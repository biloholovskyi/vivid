# Generated by Django 2.2.5 on 2019-10-09 18:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('contacts', '0008_auto_20191009_2057'),
    ]

    operations = [
        migrations.AlterField(
            model_name='contactcard',
            name='card_contacts',
            field=models.ManyToManyField(limit_choices_to={'is_staff': True}, to='contacts.Contact'),
        ),
    ]
