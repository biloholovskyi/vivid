from django.contrib import admin

from .models import Contact, ContactCard, SocialFooter, FooterContact


class AllContacts(admin.ModelAdmin):
    list_display = ('title', 'name')


admin.site.register(Contact, AllContacts)
admin.site.register(ContactCard)
admin.site.register(SocialFooter)
admin.site.register(FooterContact)
