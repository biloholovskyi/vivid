from django.contrib import admin


from .models import Card, Report, PageForPartners, PageRetail, PageRestaurant, Partner, Main


class MyAdmin(admin.ModelAdmin):
    exclude = ('slug',)

    def has_add_permission(self, request):
        return False

    def has_delete_permission(self, request, obj=None):
        return False


class RestaurantAdmin(admin.ModelAdmin):
    exclude = ('slug',)

    def has_add_permission(self, request):
        return False

    def has_delete_permission(self, request, obj=None):
        return False

    fieldsets = (
        (None, {
            'fields': ('bread_crumbs', 'page_name', 'page_photo', 'contacts_name', 'contacts')
        }),
        ('Юлия Высоцкая', {
            'fields': ('text', 'name', 'photo')
        })
    )


admin.site.register(Card)
admin.site.register(Report)
admin.site.register(PageForPartners, MyAdmin)
admin.site.register(PageRetail, MyAdmin)
admin.site.register(PageRestaurant, RestaurantAdmin)
admin.site.register(Partner)
admin.site.register(Main, MyAdmin)
