from rest_framework.generics import ListAPIView,RetrieveAPIView,CreateAPIView,GenericAPIView,UpdateAPIView

from Publishing_Fetching.models import User_inf,Blog

from .serializers import UserInfSerializer,BlogSerializer

from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth.models import User

from .utils import Utils
from rest_framework.response import Response

from django.contrib.sites.shortcuts import get_current_site

from rest_framework import generics, status, views, permissions


from django.urls import reverse
from .encode import JWT_ID

import jwt 

from django.conf import settings





class CreateBlog(CreateAPIView):
    queryset=User_inf.objects.all()
    serializer_class=BlogSerializer

class EditBLog(UpdateAPIView):
    queryset=User_inf.objects.all()
    serializer_class=BlogSerializer


class UserListView(ListAPIView):
    queryset=User_inf.objects.all()
    serializer_class=UserInfSerializer


class UserDetailView(RetrieveAPIView):
    queryset=User_inf.objects.all()
    serializer_class=UserInfSerializer

    lookup_field='email'


class BlogDetailView(RetrieveAPIView):
    queryset=Blog.objects.all()
    serializer_class=BlogSerializer

class BlogListView(ListAPIView):
    queryset=Blog.objects.all()
    serializer_class=BlogSerializer

    # lookup_field='email'



# class UserCreateView(CreateAPIView):
#     queryset = User_inf.objects.all()
#     serializer_class = UserInfSerializer

#     def post(self,request):
#         user_data=request.data
#         email=user_data["email"]
#         user=User.objects.get(email=email)
#         token=RefreshToken.for_user(user).access_token


#         # current_site=get_current_site(request).domain
#         current_site='http://127.0.0.1:3000/Signup'
#         relativeLink=reverse('email-verify')

#         absurl='http://'+ current_site + relativeLink+"?token="+ str(token)
        
#         email_body='HI verify your email \n'+absurl
#         data={'email_body':email_body,'to_email':user.email,'email_subject':'Verify your email'}
#         print("working till now")

#         Utils.send_email(data)
#         queryset = User_inf.objects.all()
#         serializer_class = UserInfSerializer
 

#         return Response(user_data,status=status.HTTP_201_CREATED)



class UserUpdateView(UpdateAPIView):

    queryset = User_inf.objects.all()

    serializer_class = UserInfSerializer


class UserCreateView(GenericAPIView):

    serializer_class = UserInfSerializer
    
    def post(self,request):
        user_data=request.data
        email=user_data["email"]

        user=User.objects.get(email=email)
        Token=JWT_ID(user.id)
        user_data['JWT_per']=Token
        user_data['user']=user.id
   


        # user_data["JWT_per"]

        serializer=self.serializer_class(data=user_data)
        serializer.is_valid(raise_exception=True)
        serializer.save()



      
        token=RefreshToken.for_user(user).access_token


        current_site=get_current_site(request).domain
        # current_site='http://127.0.0.1:3000/'
        relativeLink=reverse('email-verify')

        absurl='http://'+ current_site + relativeLink+"?token="+ str(token)
        
        email_body='HI verify your email \n'+absurl
        data={'email_body':email_body,'to_email':user.email,'email_subject':'Verify your email'}
        print("working till now")

        Utils.send_email(data)


        queryset = User_inf.objects.all()
        serializer_class = UserInfSerializer
 

        return Response(user_data,status=status.HTTP_201_CREATED)

    


  

  


 


class VerifyEmail(GenericAPIView):
    def get(self,request):
        token=request.GET.get('token')
        print(token)
        try:

            payload=jwt.decode(token,settings.SECRET_KEY)
            print("toekn is")
            print(payload)

            user=User.objects.get(id=payload['user_id'])
            print(user.id)
          

            userinf=User_inf.objects.get(email=user.email)
       
            if not user.is_authenticated:
                   
                userinf.verified=True
                userinf.save()
            
                user.is_authenticated=True
                user.save()




            return Response({'email':'Successfully activated'},status=status.HTTP_200_OK)



        except jwt.ExpiredSignatureError as identifier:
            return Response({'error':'Activation Expired'},status=status.HTTP_400_BAD_REQUEST)


        except jwt.exceptions.DecodeError as identifier:
            return Response({'error':'Invalid token'},status=status.HTTP_400_BAD_REQUEST)







# class BlogCreateView(GenericAPIView):

#     serializer_class = BlogSerializer
    
#     def post(self,request):
#         blog_data=request.data
#         token=blog_data["token"]
#         payload=jwt.decode(token,settings.SECRET_KEY)

#         user=User.objects.get(id=payload['user_id'])

#         blog_data['user']=user

#         # del blog_data["token"]


#         serializer=self.serializer_class(data=blog_data)

#         serializer.is_valid(raise_exception=True)

#         serializer.save()


     


#         queryset = User_inf.objects.all()
#         serializer_class = UserInfSerializer
 

#         return Response(blog_data,status=status.HTTP_201_CREATED)

    