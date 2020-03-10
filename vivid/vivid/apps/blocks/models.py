from django.db import models


class Awards(models.Model):
    name = models.CharField('Название', max_length=250, null=True)
    img = models.FileField('Логотип', null=True, blank=True)
    desc = models.TextField('Текст')

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'Награда'
        verbose_name_plural = 'Награды'


class Advantages(models.Model):
    name = models.CharField('Название', max_length=500, null=True)
    img = models.FileField('Логотип', null=True, blank=True)
    desc = models.TextField('Описание')

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'Преимущество'
        verbose_name_plural = 'Преимущества'


class RetailOil(models.Model):
    name = models.CharField('Название', max_length=500, null=True)
    img = models.FileField('Изображение', null=True, blank=True)
    price = models.CharField('Цена', max_length=500, null=True)
    minimum = models.CharField('Минимальная партия', max_length=100, null=True)
    size = models.CharField('Объем', max_length=100, null=True)
    desc = models.TextField('Другие характеристики')

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'Ассортимент для розницы'
        verbose_name_plural = 'Ассортимент для розницы'


class Recipes(models.Model):
    name = models.CharField('Название', max_length=500, null=True)
    img = models.FileField('Фото рецепта', null=True, blank=True)
    text = models.TextField('Рецепт')

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'Рецепт'
        verbose_name_plural = 'Рецепты'