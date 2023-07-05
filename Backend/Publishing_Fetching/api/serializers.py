from rest_framework import serializers, fields
from djoser.serializers import UserCreateSerializer

from django.contrib.auth import get_user_model



User=get_user_model()


# from Publishing_Fetching.models import User_inf,Blog
from Publishing_Fetching.models import Blog

class UserCreateSerializer(UserCreateSerializer):
    class Meta(UserCreateSerializer.Meta):
        model=User
        fields=("id","email","name","password")



# class UserInfSerializer(serializers.ModelSerializer):

#     class Meta:
#         model=User_inf
#         fields=('name','email','country','career','bio','DP','CP','Survey','Community','annexes','history','ratings','Contact','verified','payment',"JWT_per","user")




class BlogSerializer(serializers.ModelSerializer):
   


    class Meta:
        # date = fields.DateField(input_formats=['%Y-%m-%dT%H:%M:%S.%fZ'])

        model = Blog
        fields = ('sno', 'url', 'Title', "Thumbnail", "Concept",
                  "Content", "Rating", "Berries", "views",  "category", "keywords", "restriction","user")