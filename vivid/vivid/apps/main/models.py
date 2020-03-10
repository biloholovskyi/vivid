from django.db import models


from contacts.models import Contact


class MainProduction(models.Model):
    photo = models.FileField('Изображение', null=True, blank=True)
    title = models.CharField('Заголовок', max_length=500, null=True, blank=True)
    desc = models.TextField('Описание', null=True, blank=True)

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'Продукцию'
        verbose_name_plural = 'Продукция'


class MainSettings(models.Model):
    slug = models.CharField('slug', max_length=100, default='main_settings')
    banner = models.FileField('Баннер', null=True, blank=True)
    title = models.CharField('Заголовок', max_length=500, null=True, blank=True)
    desc = models.TextField('Описание', null=True, blank=True)
    video = models.FileField('Видео ', null=True, blank=True)

    def __str__(self):
        return 'Настройки'

    class Meta:
        verbose_name = 'Настройки'
        verbose_name_plural = 'Настройки'


class MenuSettings(models.Model):
    slug = models.CharField('slug', max_length=100, default='menu_settings')
    card_contacts = models.ManyToManyField(Contact, 'Контакты_меню')

    def __str__(self):
        return 'Контакты'

    class Meta:
        verbose_name = 'Контакты меню'
        verbose_name_plural = 'Контакты меню'