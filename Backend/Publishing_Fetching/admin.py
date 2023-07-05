from django.contrib import admin

from .models import UserAccount,Survey,Blog
# Register your models here.

admin.site.register(UserAccount)
admin.site.register(Survey)
admin.site.register(Blog)