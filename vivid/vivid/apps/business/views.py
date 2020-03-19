from django.http import Http404, HttpResponseRedirect
from django.shortcuts import render

from .models import Card, Report, PageForPartners, PageRetail, PageRestaurant, Partner, Main
from blocks.models import Advantages, Awards, RetailOil, Recipes
from main.models import MenuSettings
from contacts.models import SocialFooter, FooterContact
from main.models import MainSettings


def index(request):
    cards_list = Card.objects.all()
    reports_list = Report.objects.order_by('-report_date').all()
    contacts = Main.objects.all()
    menu_contacts = MenuSettings.objects.get(slug='menu_settings')
    footer_socials = SocialFooter.objects.all()
    footer_contacts = FooterContact.objects.all()
    settings = MainSettings.objects.get(slug='main_settings')
    return render(request, 'business/business.html', {
        'cards_list': cards_list,
        'reports_list': reports_list,
        'contacts_list': contacts,
        'menu_contacts': menu_contacts,
        'footer_socials': footer_socials,
        'footer_contacts': footer_contacts,
        'settings': settings
    })


def page_partner(request):
    try:
        a = PageForPartners.objects.get(slug='partner')
        adv = Advantages.objects.all()
        awards = Awards.objects.all()
        geo = Partner.objects.all()
        presentation = a.file
        menu_contacts = MenuSettings.objects.get(slug='menu_settings')
        footer_socials = SocialFooter.objects.all()
        footer_contacts = FooterContact.objects.all()
        settings = MainSettings.objects.get(slug='main_settings')
    except:
        raise Http404('Страница не найдена')
    return render(request, 'business/page-partner.html', {
        'page': a,
        'adv': adv,
        'awards': awards,
        'geo': geo,
        'presentation': presentation,
        'menu_contacts': menu_contacts,
        'footer_socials': footer_socials,
        'footer_contacts': footer_contacts,
        'settings': settings
    })


def page_retail(request):
    try:
        a = PageRetail.objects.get(slug='retail')
        adv = Advantages.objects.all()
        awards = Awards.objects.all()
        retail = RetailOil.objects.all()
        geo = Partner.objects.all()
        presentation = a.file
        menu_contacts = MenuSettings.objects.get(slug='menu_settings')
        footer_socials = SocialFooter.objects.all()
        footer_contacts = FooterContact.objects.all()
        settings = MainSettings.objects.get(slug='main_settings')
    except:
        raise Http404('Страница не найдена')
    return render(request, 'business/page-retail.html', {
        'page': a,
        'adv': adv,
        'awards': awards,
        'retail': retail,
        'geo': geo,
        'presentation': presentation,
        'menu_contacts': menu_contacts,
        'footer_socials': footer_socials,
        'footer_contacts': footer_contacts,
        'settings': settings
    })


def page_restaurant(request):
    try:
        a = PageRestaurant.objects.get(slug='restaurant')
        adv = Advantages.objects.all()
        awards = Awards.objects.all()
        recipes = Recipes.objects.all()
        menu_contacts = MenuSettings.objects.get(slug='menu_settings')
        footer_socials = SocialFooter.objects.all()
        footer_contacts = FooterContact.objects.all()
        settings = MainSettings.objects.get(slug='main_settings')
    except:
        raise Http404('Страница не найдена')
    return render(request, 'business/page-restaurant.html', {
        'page': a,
        'adv': adv,
        'awards': awards,
        'recipes': recipes,
        'menu_contacts': menu_contacts,
        'footer_socials': footer_socials,
        'footer_contacts': footer_contacts,
        'settings': settings
    })
