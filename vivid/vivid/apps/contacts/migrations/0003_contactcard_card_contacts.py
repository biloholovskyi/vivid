# Generated by Django 2.2.5 on 2019-10-09 17:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('contacts', '0002_contactcard'),
    ]

    operations = [
        migrations.AddField(
            model_name='contactcard',
            name='card_contacts',
            field=models.ManyToManyField(to='contacts.Contact'),
        ),
    ]
