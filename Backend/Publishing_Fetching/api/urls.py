from django.urls import path

from .views import UserListView,UserDetailView,UserCreateView,VerifyEmail,UserUpdateView, CreateBlog,BlogDetailView,BlogListView,EditBLog

# ,BlogCreateView


urlpatterns=[

    path('User',UserListView.as_view()),
    path('User/<email>',UserDetailView.as_view()),
    path('create/account/', UserCreateView.as_view()),
    path('Update/account/',UserUpdateView.as_view()),
    path('email-verify/', VerifyEmail.as_view(),name='email-verify'),
    path('Writing/Publish/', CreateBlog.as_view(),name='writing-publish'),
    path('<url>/<pk>', BlogDetailView.as_view(),name='Blog'),
    path('', BlogListView.as_view(),name='Blog'),
    path('Edit/<pk>', EditBLog.as_view(),name='Blogedit'),

    # path('Writing/Publish/', BlogCreateView.as_view(),name='writing-publish'),

]