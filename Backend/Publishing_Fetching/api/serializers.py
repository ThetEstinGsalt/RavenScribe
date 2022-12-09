from rest_framework import serializers, fields

from Publishing_Fetching.models import User_inf,Blog

class UserInfSerializer(serializers.ModelSerializer):

    class Meta:
        model=User_inf
        fields=('name','email','country','career','bio','DP','CP','Survey','Community','annexes','history','ratings','Contact','verified','payment',"JWT_per","user")




class BlogSerializer(serializers.ModelSerializer):
   


    class Meta:
        # date = fields.DateField(input_formats=['%Y-%m-%dT%H:%M:%S.%fZ'])

        model = Blog
        fields = ('sno', 'url', 'Title', "Thumbnail", "Concept",
                  "Content", "Rating", "Berries", "views",  "category", "keywords", "restriction","user")