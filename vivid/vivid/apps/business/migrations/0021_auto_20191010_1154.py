# Generated by Django 2.2.5 on 2019-10-10 08:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('contacts', '0013_contactcard_status'),
        ('business', '0020_main_contacts'),
    ]

    operations = [
        migrations.AddField(
            model_name='pageforpartners',
            name='contacts',
            field=models.ManyToManyField(to='contacts.Contact'),
        ),
        migrations.AddField(
            model_name='pagerestaurant',
            name='contacts',
            field=models.ManyToManyField(to='contacts.Contact'),
        ),
        migrations.AddField(
            model_name='pageretail',
            name='contacts',
            field=models.ManyToManyField(to='contacts.Contact'),
        ),
    ]
