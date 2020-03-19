from django.db import models


class Contact(models.Model):
    types = (
        ('link', 'Cсылка'),
        ('adr', 'Адрес')
    )

    status = models.CharField('Тип', choices=types, max_length=600, null=True)
    title = models.CharField('Имя контакта', max_length=500, default='title')
    link = models.CharField('Ссылка', max_length=500, null=True, blank=True)
    name = models.CharField('Название', max_length=500, null=True)
    desc = models.TextField('Описание', null=True, blank=True)

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'Контакт'
        verbose_name_plural = 'Контакты'


class ContactCard(models.Model):
    types = (
        ('main', 'Основные'),
        ('other', 'Другие контакты')
    )

    status = models.CharField('Тип', choices=types, max_length=600, null=True)
    card_title = models.CharField('Заголовок', max_length=200)
    card_contacts = models.ManyToManyField(Contact, 'Контакты')

    def __str__(self):
        return self.card_title

    class Meta:
        verbose_name = 'Карточка'
        verbose_name_plural = 'Карточки'


class SocialFooter(models.Model):
    link = models.CharField('Ссылка', max_length=900, null=True)
    name = models.CharField('Название', max_length=600, null=True)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'Соц сеть в подвале'
        verbose_name_plural = 'Соц сети в подвале'


class FooterContact(models.Model):
    link = models.CharField('Ссылка', max_length=900, null=True)
    name = models.CharField('Название', max_length=600, null=True)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'Контакт в подвале'
        verbose_name_plural = 'Контакты в подвале'
