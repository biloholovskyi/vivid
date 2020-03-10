from django.contrib import admin

from django_summernote.admin import SummernoteModelAdmin
from .models import Article


class NewAdmin(SummernoteModelAdmin):
    summernote_fields = ('text')
    list_display = ('title', 'category')


admin.site.register(Article, NewAdmin)
