from django.contrib import admin


from .models import Awards, Advantages, RetailOil, Recipes


# class MyAdmin(admin.ModelAdmin):
#     def has_add_permission(self, request):
#         return False


admin.site.register(Awards)
admin.site.register(Advantages)
admin.site.register(RetailOil)
admin.site.register(Recipes)