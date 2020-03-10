from django.db import models


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


class PageOil(models.Model):
    slug = models.CharField('Ссылка', max_length=100, default='oil')
    bread_crumbs = models.CharField('Крошки', max_length=200, null=True)
    page_name = models.CharField('Название страницы', max_length=200)
    page_photo = models.FileField('Фон', null=True, blank=True)
    # content
    # first block
    first_title = models.CharField('Название', max_length=600, null=True, blank=True)
    first_text_1 = models.TextField('Текст 1', null=True, blank=True)
    first_text_2 = models.TextField('Текст 2', null=True, blank=True)
    # cold
    cold_title = models.CharField('Название', max_length=600, null=True, blank=True)
    cold_text = models.TextField('Текст', null=True, blank=True)
    cold_text_1 = models.TextField('Текст 1', null=True, blank=True)
    cold_text_2 = models.TextField('Текст 2', null=True, blank=True)
    # choice
    choice_title = models.CharField('Название', max_length=600, null=True, blank=True)
    choice_text = models.TextField('Текст', null=True, blank=True)
    choice_title_1 = models.CharField('Название 1', max_length=600, null=True, blank=True)
    choice_item_1_1 = models.TextField('Текст', null=True, blank=True)
    choice_item_1_2 = models.TextField('Текст', null=True, blank=True)
    choice_title_2 = models.CharField('Название 2', max_length=600, null=True, blank=True)
    choice_item_2_1 = models.TextField('Текст', null=True, blank=True)
    choice_item_2_2 = models.TextField('Текст', null=True, blank=True)
    choice_text_bottom = models.TextField('Текст снизу', null=True, blank=True)
    # proof
    proof_title = models.CharField('Название', max_length=600, null=True, blank=True)
    proof_title_1 = models.CharField('Название 1', max_length=600, null=True, blank=True)
    proof_text = models.TextField('Текст', null=True, blank=True)
    # myth
    myth_title = models.CharField('Название', max_length=600, null=True, blank=True)
    myth_title_1 = models.CharField('Название 1', max_length=600, null=True, blank=True)
    myth_title_2 = models.CharField('Название 2', max_length=600, null=True, blank=True)
    myth_text = models.TextField('Текст', null=True, blank=True)
    myth_title_3 = models.CharField('Название 3', max_length=600, null=True, blank=True)
    myth_text_3 = models.TextField('Текст 3', null=True, blank=True)
    myth_title_4 = models.CharField('Название 4', max_length=600, null=True, blank=True)
    myth_text_4 = models.TextField('Текст 4', null=True, blank=True)

    def __str__(self):
        return self.page_name

    class Meta:
        verbose_name = 'Страница "О масле"'
        verbose_name_plural = 'Страница "О масле"'


class PageProduction(models.Model):
    slug = models.CharField('Ссылка', max_length=100, default='production')
    bread_crumbs = models.CharField('Крошки', max_length=200, null=True)
    page_name = models.CharField('Название страницы', max_length=200)
    page_photo = models.FileField('Фон', null=True, blank=True)
    first_title = models.CharField('Название', max_length=600, null=True, blank=True)
    first_text = models.TextField('Текст', null=True, blank=True)
    press_title = models.CharField('Название', max_length=600, null=True, blank=True)
    press_first_title = models.CharField('Название первого блока', max_length=600, null=True, blank=True)
    press_first_text = models.TextField('Текст первого блока', null=True, blank=True)
    press_2_title = models.CharField('Название второго блока', max_length=600, null=True, blank=True)
    press_2_text = models.TextField('Текст второго блока', null=True, blank=True)
    press_3_title = models.CharField('Название третьего блока', max_length=600, null=True, blank=True)
    press_3_text = models.TextField('Текст третьего блока', null=True, blank=True)
    press_4_title = models.CharField('Название четвертого блока', max_length=600, null=True, blank=True)
    press_4_text = models.TextField('Текст четвертого блока', null=True, blank=True)
    press_5_title = models.CharField('Название пятого блока', max_length=600, null=True, blank=True)
    press_5_text = models.TextField('Текст пятого блока', null=True, blank=True)
    cold_title = models.CharField('Название', max_length=600, null=True, blank=True)
    # cold_title_1 = models.CharField('Название 1', max_length=600, null=True, blank=True)
    cold_text = models.TextField('Текст', null=True, blank=True)
    clear_title = models.CharField('Название', max_length=600, null=True, blank=True)
    clear_title_1 = models.CharField('Название 1', max_length=600, null=True, blank=True)
    clear_text_1 = models.TextField('Текст 1 очистка масла', null=True, blank=True)
    clear_title_2 = models.CharField('Название 2', max_length=600, null=True, blank=True)
    clear_text_2 = models.TextField('Текст 2 очистка масла', null=True, blank=True)
    filter_title = models.CharField('Название', max_length=600, null=True, blank=True)
    filter_text = models.TextField('Текст', null=True, blank=True)
    check_title = models.CharField('Название', max_length=600, null=True, blank=True)
    check_text = models.TextField('Текст', null=True, blank=True)
    oil_title = models.CharField('Название', max_length=600, null=True, blank=True)
    oil_title_small = models.CharField('Подпись', max_length=600, null=True, blank=True)
    oil_title_1 = models.CharField('Название 1', max_length=600, null=True, blank=True)
    oil_text = models.TextField('Текст', null=True, blank=True)

    def __str__(self):
        return self.page_name

    class Meta:
        verbose_name = 'Страница "Производство"'
        verbose_name_plural = 'Страница "Производство"'


class PageCareer(models.Model):
    slug = models.CharField('Ссылка', max_length=100, default='career')
    bread_crumbs = models.CharField('Крошки', max_length=200, null=True)
    page_name = models.CharField('Название страницы', max_length=200)
    page_photo = models.FileField('Фон', null=True, blank=True)

    def __str__(self):
        return self.page_name

    class Meta:
        verbose_name = 'Страница "Карьера"'
        verbose_name_plural = 'Страница "Карьера"'


class PageTeam(models.Model):
    slug = models.CharField('Ссылка', max_length=100, default='team')
    page_name = models.CharField('Название страницы', max_length=200)

    def __str__(self):
        return self.page_name

    class Meta:
        verbose_name = 'Страница "Команда"'
        verbose_name_plural = 'Страница "Команда"'


class Team(models.Model):
    name = models.CharField('Имя', max_length=300, null=True, blank=True)
    post = models.CharField('Должность', max_length=300, null=True, blank=True)
    mail = models.EmailField('Email', max_length=500, null=True, blank=True)
    photo = models.FileField('Фото', null=True, blank=True)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'Член команды'
        verbose_name_plural = 'Члены команды'


class Advantage(models.Model):
    name = models.CharField('Преимущество', max_length=300, null=True, blank=True)
    photo = models.FileField('Фото', null=True, blank=True)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'Преимущества'
        verbose_name_plural = 'Преимущества'


class Production(models.Model):
    name = models.CharField('Навание', max_length=300, null=True, blank=True)
    text = models.TextField('Текст', null=True, blank=True)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'Производство'
        verbose_name_plural = 'Производство'


class Vacancy(models.Model):
    atrList = (
        ('Офис', 'Офис'),
        ('Производство', 'Производство')
    )

    typeList = (
        ('Полный день', 'Полный день'),
        ('Неполный день', 'Неполный день'),
        ('Сменная работа', 'Сменная работа'),
        ('Разовая работ', 'Разовая работа')
    )

    atr = models.CharField('Атрибут', choices=atrList, max_length=500, null=True)
    type = models.CharField('Тип работы', choices=typeList, max_length=500, null=True)
    name = models.CharField('Название', max_length=500, null=True, blank=True)
    desc = models.TextField('Описание вакансии', null=True, blank=True)
    price = models.CharField('Зарплата', max_length=600, null=True, blank=True)

    class Meta:
        verbose_name = 'Вакансия'
        verbose_name_plural = 'Вакансии'