from django.http import Http404, HttpResponseRedirect
from django.shortcuts import render

from .models import Article
from main.models import MenuSettings
from contacts.models import SocialFooter, FooterContact


def index(request):
    try:
        articles = Article.objects.all()
        stocks = Article.objects.all().filter(category='Свежие акции')[:3]
        company = Article.objects.all().filter(category='Новости компании')[:6]
        smi = Article.objects.all().filter(category='Пресса о нас')[:3]
        menu_contacts = MenuSettings.objects.get(slug='menu_settings')
        footer_socials = SocialFooter.objects.all()
        footer_contacts = FooterContact.objects.all()
    except:
        raise Http404('Страница не найдена')
    return render(request, 'news/news.html', {
        'news': articles,
        'stocks': stocks,
        'company': company,
        'smi': smi,
        'menu_contacts': menu_contacts,
        'footer_socials': footer_socials,
        'footer_contacts': footer_contacts
    })


def article(request, article_id):
    try:
        a = Article.objects.get(id=article_id)
        other = Article.objects.all().exclude(id=article_id)
        stocks = other.filter(category='Свежие акции')[:3]
        company = other.filter(category='Новости компании')[:3]
        smi = other.filter(category='Пресса о нас')[:3]
        menu_contacts = MenuSettings.objects.get(slug='menu_settings')
        footer_socials = SocialFooter.objects.all()
        footer_contacts = FooterContact.objects.all()
    except:
        raise Http404("Статья не найдена!")

    return render(request, 'news/article.html', {
        'article': a,
        'stocks': stocks,
        'company': company,
        'smi': smi,
        'menu_contacts': menu_contacts,
        'footer_socials': footer_socials,
        'footer_contacts': footer_contacts
    })


def stocks(request):
    try:
        articles = Article.objects.all().filter(category='Свежие акции')
        title = 'Свежие акции'
        menu_contacts = MenuSettings.objects.get(slug='menu_settings')
        footer_socials = SocialFooter.objects.all()
        footer_contacts = FooterContact.objects.all()
    except:
        raise Http404('Page not found')
    return render(request, 'news/cat.html', {
        'articles': articles,
        'title': title,
        'menu_contacts': menu_contacts,
        'footer_socials': footer_socials,
        'footer_contacts': footer_contacts
    })


def company(request):
    try:
        articles = Article.objects.all().filter(category='Новости компании')
        title = 'Новости компании'
        menu_contacts = MenuSettings.objects.get(slug='menu_settings')
        footer_socials = SocialFooter.objects.all()
        footer_contacts = FooterContact.objects.all()
    except:
        raise Http404('Page not found')
    return render(request, 'news/cat.html', {
        'articles': articles,
        'title': title,
        'menu_contacts': menu_contacts,
        'footer_socials': footer_socials,
        'footer_contacts': footer_contacts
    })


def smi(request):
    try:
        articles = Article.objects.all().filter(category='Пресса о нас')
        title = 'Пресса о нас'
        menu_contacts = MenuSettings.objects.get(slug='menu_settings')
        footer_socials = SocialFooter.objects.all()
        footer_contacts = FooterContact.objects.all()
    except:
        raise Http404('Page not found')
    return render(request, 'news/cat.html', {
        'articles': articles,
        'title': title,
        'menu_contacts': menu_contacts,
        'footer_socials': footer_socials,
        'footer_contacts': footer_contacts
    })
