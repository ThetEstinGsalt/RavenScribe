from django.urls import path
from .views import index
from django.urls import path, include, re_path
from django.views.generic import TemplateView
urlpatterns = [
    # path("", index, name="index"),
    path("Blogpage", index, name="index"),
    path("Login", index, name="index"),
    # path("password/reset/confirm/<slug:uid>/<slug:token>",index,name="index")

]

# urlpatterns += [re_path(r'^.*', index)]
# urlpatterns += [re_path(r'^.*', TemplateView.as_view(template_name='index.html'))]