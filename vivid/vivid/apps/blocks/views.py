from django.http import Http404, HttpResponseRedirect
from django.shortcuts import render
from .models import Advantages


# def advantages(request):
#     try:
#         a = Advantages.objects.all()
#     except:
#         raise Http404('Страница не найдена')
#     return render(request, 'base.html', {'adv': a})