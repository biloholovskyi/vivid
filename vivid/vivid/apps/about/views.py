from django.http import Http404, HttpResponseRedirect, JsonResponse
from django.shortcuts import render
from django.core import serializers

from .models import *
from news.models import Article
from blocks.models import Recipes
from main.models import MenuSettings, MainSettings
from contacts.models import SocialFooter, FooterContact


def index(request):
    cards_list = Card.objects.all()
    articles = Article.objects.all().filter(category='Новости компании')
    menu_contacts = MenuSettings.objects.get(slug='menu_settings')
    footer_socials = SocialFooter.objects.all()
    footer_contacts = FooterContact.objects.all()
    settings = MainSettings.objects.get(slug='main_settings')
    return render(request, 'about/about.html', {
        'cards_list': cards_list,
        'articles': articles,
        'menu_contacts': menu_contacts,
        'footer_socials': footer_socials,
        'footer_contacts': footer_contacts,
        'settings': settings
    })


def page_oil(request):
    try:
        a = PageOil.objects.get(slug='oil')
        recipes = Recipes.objects.all()
        menu_contacts = MenuSettings.objects.get(slug='menu_settings')
        footer_socials = SocialFooter.objects.all()
        footer_contacts = FooterContact.objects.all()
        settings = MainSettings.objects.get(slug='main_settings')
    except:
        raise Http404('Страница не найдена')
    return render(request, 'about/page-oil.html', {
        'page': a,
        'recipes': recipes,
        'menu_contacts': menu_contacts,
        'footer_socials': footer_socials,
        'footer_contacts': footer_contacts,
        'settings': settings
    })


def page_production(request):
    try:
        a = PageProduction.objects.get(slug='production')
        production = Production.objects.all()
        menu_contacts = MenuSettings.objects.get(slug='menu_settings')
        footer_socials = SocialFooter.objects.all()
        footer_contacts = FooterContact.objects.all()
        settings = MainSettings.objects.get(slug='main_settings')
    except:
        raise Http404('Страница не найдена')
    return render(request, 'about/page-production.html', {
        'page': a,
        'production': production,
        'menu_contacts': menu_contacts,
        'footer_socials': footer_socials,
        'footer_contacts': footer_contacts,
        'settings': settings
    })


def page_team(request):
    try:
        a = PageTeam.objects.get(slug='team')
        team = Team.objects.all()
        menu_contacts = MenuSettings.objects.get(slug='menu_settings')
        footer_socials = SocialFooter.objects.all()
        footer_contacts = FooterContact.objects.all()
        settings = MainSettings.objects.get(slug='main_settings')
    except:
        raise Http404('Страница не найдена')
    return render(request, 'about/page-team.html', {
        'page': a,
        'team': team,
        'menu_contacts': menu_contacts,
        'footer_socials': footer_socials,
        'footer_contacts': footer_contacts,
        'settings': settings
    })


def page_career(request):
    try:
        a = PageCareer.objects.get(slug='career')
        adv = Advantage.objects.all()
        all = Vacancy.objects.all()
        all_json = serializers.serialize("json", all)
        office = all.filter(atr='Офис')
        prod = all.filter(atr='Производство')
        menu_contacts = MenuSettings.objects.get(slug='menu_settings')
        footer_socials = SocialFooter.objects.all()
        footer_contacts = FooterContact.objects.all()
        settings = MainSettings.objects.get(slug='main_settings')
    except:
        raise Http404('Страница не найдена')
    return render(request, 'about/page-career.html', {
        'page': a,
        'adv': adv,
        'all': all,
        'office': office,
        'prod': prod,
        'all_json': all_json,
        'menu_contacts': menu_contacts,
        'footer_socials': footer_socials,
        'footer_contacts': footer_contacts,
        'settings': settings
    })
