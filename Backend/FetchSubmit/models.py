
# Create your models here.
from django.db import models


from django.utils.timezone import now
# from django.contrib.auth.models import User
from django.contrib.auth.models import AbstractBaseUser,PermissionsMixin,BaseUserManager

# Create your models here.

class UserAccountManager(BaseUserManager):

    def create_user(self,email,password=None,**extra_fields):
        if not email:
            raise ValueError("User must have an email address")
    
        emailN=self.normalize_email(email)
        user=self.model(email=emailN,**extra_fields)

        user.set_password(password)

        user.save()

        return user



class UserAccount(AbstractBaseUser,PermissionsMixin):
    id = models.AutoField(primary_key=True)

    name= models.TextField(max_length=100)
    email = models.EmailField(unique=True)
    is_active=models.BooleanField(default=True)
    is_staff=models.BooleanField(default=False)
    country= models.TextField(max_length=100,blank=True,null=True)
    career= models.TextField(max_length=100,blank=True,null=True)
    bio= models.TextField(max_length=1000,blank=True,null=True)
    DP=models.CharField(max_length=10000000,blank=True,null=True)
    CP=models.CharField(max_length=10000000,blank=True,null=True)

    annexes=models.IntegerField(default=0,blank=True,null=True)

    ratings=models.IntegerField(default=0,blank=True,null=True)

    verified=models.BooleanField(default=False,blank=True,null=True)

    JWT_per=models.CharField(max_length=10000,blank=True,null=True)
    # user = models.ForeignKey(User, on_delete=models.CASCADE,default="")

    objects=UserAccountManager()

    USERNAME_FIELD ='email'
    REQUIRED_FEILDS=["name",'email']

    def get_full_name(self):
        return self.name

    def get_short_name(self):
        return self.name


    def __str__(self):
        return self.name