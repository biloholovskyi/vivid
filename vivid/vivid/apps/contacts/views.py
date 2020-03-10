from django.http import Http404, HttpResponseRedirect
from django.shortcuts import render

from .models import Contact, ContactCard, SocialFooter, FooterContact
from main.models import MenuSettings


def index(request):
    try:
        contacts = Contact.objects.all()
        contacts_cards = ContactCard.objects.all()
        menu_contacts = MenuSettings.objects.get(slug='menu_settings')
        footer_socials = SocialFooter.objects.all()
        footer_contacts = FooterContact.objects.all()
    except:
        raise Http404('Страница не найдена')
    return render(request, 'contacts/contacts.html', {
        'contacts': contacts,
        'contacts_cards': contacts_cards,
        'menu_contacts': menu_contacts,
        'footer_socials': footer_socials,
        'footer_contacts': footer_contacts
    })
