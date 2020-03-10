from django.db import models
from contacts.models import Contact


class Main(models.Model):
    contacts = models.ManyToManyField(Contact)

    def __str__(self):
        return 'Настройки'

    class Meta:
        verbose_name = 'Настройки'
        verbose_name_plural = 'Настройки'


class Card(models.Model):
    card_title = models.CharField('Заголовок', max_length=200)
    card_name = models.CharField('Название', max_length=300)
    card_desc = models.TextField('Описание')
    card_img = models.FileField('Фоновое изображение', null=True, blank=True)
    card_link = models.CharField('Ссылка', max_length=200, null=True)

    def __str__(self):
        return self.card_name

    class Meta:
        verbose_name = 'Карточка'
        verbose_name_plural = 'Карточки'


class Report(models.Model):
    report_date = models.DateField('Дата', blank=True, null=True)
    report_name = models.CharField('Название', max_length=200)
    report_desc = models.TextField('Описание', max_length=500)
    report_file = models.FileField('Файл', null=True, blank=True)

    def __str__(self):
        return self.report_name

    class Meta:
        verbose_name ='Презентация/Отчет'
        verbose_name_plural = 'Презентации и Отчеты'


class PageForPartners(models.Model):
    slug = models.CharField('Ссылка', max_length=100)
    bread_crumbs = models.CharField('Крошки', max_length=200, null=True)
    page_name = models.CharField('Название страницы', max_length=200)
    page_photo = models.FileField('Фон', null=True, blank=True)
    contacts_name = models.CharField('Название контакта', max_length=500, null=True, blank=True)
    contacts = models.ManyToManyField(Contact)
    file = models.FileField('Презентация', null=True, blank=True)

    def __str__(self):
        return self.page_name

    class Meta:
        verbose_name = 'Страница "Партнерам"'
        verbose_name_plural = 'Страница "Партнерам"'


class PageRetail(models.Model):
    slug = models.CharField('Ссылка', max_length=100)
    bread_crumbs = models.CharField('Крошки', max_length=200, null=True)
    page_name = models.CharField('Название страницы', max_length=200)
    page_photo = models.FileField('Фон', null=True, blank=True)
    contacts_name = models.CharField('Название контакта 2', max_length=500, null=True, blank=True)
    contacts = models.ManyToManyField(Contact)
    contacts_name_2 = models.CharField('Название контакта 2', max_length=500, null=True, blank=True)
    contacts_2 = models.ManyToManyField(Contact, related_name='second_contact')
    file = models.FileField('Презентация', null=True, blank=True)

    def __str__(self):
        return self.page_name

    class Meta:
        verbose_name = 'Страница "Розничным Партнерам"'
        verbose_name_plural = 'Страница "Розничным Партнерам"'


class PageRestaurant(models.Model):
    slug = models.CharField('Ссылка', max_length=100)
    bread_crumbs = models.CharField('Крошки', max_length=200, null=True)
    page_name = models.CharField('Название страницы', max_length=200)
    page_photo = models.FileField('Фон', null=True, blank=True)
    contacts_name = models.CharField('Название контакта', max_length=500, null=True, blank=True)
    contacts = models.ManyToManyField(Contact)
    text = models.TextField('Текст', null=True, blank=True)
    name = models.CharField('Имя', max_length=500, null=True)
    photo = models.FileField('Фото', null=True, blank=True)

    def __str__(self):
        return self.page_name

    class Meta:
        verbose_name = 'Страница "Ресторанам"'
        verbose_name_plural = 'Страница "Ресторанам"'


class Partner(models.Model):
    countryList = (
        ('ru', 'Россия'),
        ('ch', 'Китай'),
        ('uar', 'ЮАР'),
        ('canada', 'Канада'),
        ('fr', 'Франция'),
        ('it', 'Италия')
    )

    name = models.CharField('Партнер', max_length=100)
    logo = models.FileField('Логотип', null=True, blank=True)
    country = models.CharField('Cтрана', choices=countryList, max_length=500, null=True)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'Партнер'
        verbose_name_plural = 'Партнеры'
