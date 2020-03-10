from django.shortcuts import render

from .models import MainSettings, MenuSettings, MainProduction
from news.models import Article
from blocks.models import Awards
from business.models import Partner
from contacts.models import SocialFooter, FooterContact


def index(request):
    stocks = Article.objects.all().filter(category='Свежие акции')
    company = Article.objects.all().filter(category='Новости компании')
    smi = Article.objects.all().filter(category='Пресса о нас')
    awards = Awards.objects.all()
    partner = Partner.objects.all()
    settings = MainSettings.objects.get(slug='main_settings')
    menu_contacts = MenuSettings.objects.get(slug='menu_settings')
    footer_socials = SocialFooter.objects.all()
    footer_contacts = FooterContact.objects.all()
    productions = MainProduction.objects.all()
    return render(request, 'main.html', {
        'stocks': stocks,
        'company': company,
        'smi': smi,
        'awards': awards,
        'partners': partner,
        'settings': settings,
        'menu_contacts': menu_contacts,
        'footer_socials': footer_socials,
        'footer_contacts': footer_contacts,
        'productions': productions
    })
