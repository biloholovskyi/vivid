from django.db import models


class Article(models.Model):
    categoryList = (
        ('Свежие акции', 'Свежие акции'),
        ('Новости компании', 'Новости компании'),
        ('Пресса о нас', 'Пресса о нас')
    )

    title = models.CharField('Название стать', max_length=500, null=True)
    category = models.CharField('Категория', choices=categoryList, max_length=500, null=True)
    small_desc = models.TextField('Краткое описание', null=True)
    photo = models.FileField('Обложка', null=True, blank=True)
    banner = models.FileField('Баннер', null=True, blank=True)
    text = models.TextField('Текст статьи', null=True)
    date_start = models.DateField('Дата-начала', blank=True, null=True)
    date = models.DateField('Дата', blank=True, null=True)

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'Статья'
        verbose_name_plural = 'Статьи'
        ordering = ['-id']