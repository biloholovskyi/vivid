from django.contrib import admin


from django_summernote.admin import SummernoteModelAdmin
from .models import Card, PageCareer, PageOil, PageProduction, PageTeam, Team, Advantage, Production, Vacancy


class MyAdmin(admin.ModelAdmin):
    exclude = ('slug',)

    def has_add_permission(self, request):
        return False

    def has_delete_permission(self, request, obj=None):
        return False


class ProductionAdmin(admin.ModelAdmin):
    exclude = ('slug',)

    def has_add_permission(self, request):
        return False

    def has_delete_permission(self, request, obj=None):
        return False

    fieldsets = (
        (None, {
            'fields': (
                'bread_crumbs',
                'page_name',
                'page_photo'
            )
        }),
        ('Первый блок', {
            'fields': ('first_title', 'first_text')
        }),
        ('Прессование', {
            'fields': ('press_title', 'press_first_title', 'press_first_text', 'press_2_title', 'press_2_text', 'press_3_title', 'press_3_text', 'press_4_title', 'press_4_text', 'press_5_title', 'press_5_text')
        }),
        ('Холодный отжим', {
            'fields': ('cold_title', 'cold_text')
        }),
        ('Очистка масла', {
            'fields': ('clear_title', 'clear_title_1', 'clear_text_1', 'clear_title_2', 'clear_text_2')
        }),
        ('Фильтрация', {
            'fields': ('filter_title', 'filter_text')
        }),
        ('Проверка качества', {
            'fields': ('check_title', 'check_text')
        }),
        ('Последний блок', {
            'fields': ('oil_title', 'oil_title_small', 'oil_title_1', 'oil_text')
        })
    )


class OilAdmin(admin.ModelAdmin):
    exclude = ('slug',)

    def has_add_permission(self, request):
        return False

    def has_delete_permission(self, request, obj=None):
        return False

    fieldsets = (
        (None, {
            'fields': (
                'bread_crumbs',
                'page_name',
                'page_photo'
            )
        }),
        ('Первый блок', {
            'fields': ('first_title', 'first_text_1', 'first_text_2')
        }),
        ('Холодный отжим', {
            'fields': ('cold_title', 'cold_text', 'cold_text_1', 'cold_text_2')
        }),
        ('Что выбрать', {
            'fields': ('choice_title', 'choice_text', 'choice_title_1', 'choice_item_1_1', 'choice_item_1_2',
                       'choice_title_2', 'choice_item_2_1', 'choice_item_2_2', 'choice_text_bottom')
        }),
        ('Доказано', {
            'fields': ('proof_title', 'proof_title_1', 'proof_text')
        }),
        ('Миф', {
            'fields': ('myth_title', 'myth_title_1', 'myth_title_2', 'myth_text', 'myth_title_3', 'myth_text_3', 'myth_title_4', 'myth_text_4')
        })
    )


class NewAdmin(SummernoteModelAdmin):
    summernote_fields = ('desc')
    list_display = ('name', 'atr', 'type')
    list_display_links = ('name', 'atr', 'type')


admin.site.register(Card)
admin.site.register(PageTeam, MyAdmin)
admin.site.register(PageProduction, ProductionAdmin)
admin.site.register(PageOil, OilAdmin)
admin.site.register(PageCareer, MyAdmin)
admin.site.register(Team)
admin.site.register(Advantage)
admin.site.register(Production)
admin.site.register(Vacancy, NewAdmin)
