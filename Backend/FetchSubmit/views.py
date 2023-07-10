from django.shortcuts import render

# Create your views here.

from django_nextjs.render import render_nextjs_page_sync


def index(request):
    return render_nextjs_page_sync(request)