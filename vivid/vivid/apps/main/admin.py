from django.contrib import admin


from .models import MainProduction, MainSettings, MenuSettings


class MyAdmin(admin.ModelAdmin):
    exclude = ('slug',)

    def has_add_permission(self, request):
        return False

    def has_delete_permission(self, request, obj=None):
        return False


admin.site.register(MainProduction)
admin.site.register(MainSettings, MyAdmin)
admin.site.register(MenuSettings, MyAdmin)
