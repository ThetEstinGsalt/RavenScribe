
from django.contrib import admin
from django.urls import path,include,re_path
from django.views.generic import TemplateView
# from django.urls import re_path as url

urlpatterns = [

    # path('api-auth/',include('rest_framework.urls')),
    # path('rest-auth/', include('rest_auth.urls')),

    # path('rest-auth/registration/', include('rest_auth.registration.urls')),
    path('admin/', admin.site.urls),
    path('auth/',include('djoser.urls')),
    path('auth/',include('djoser.urls.jwt')),
    path('api/', include('Publishing_Fetching.api.urls')),
]

urlpatterns+=[re_path(r'^.*',TemplateView.as_view(template_name='index.html'))]