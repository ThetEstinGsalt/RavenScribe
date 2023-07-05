from django.db import models

from django.utils.timezone import now
from django.contrib.auth.models import User
from django.contrib.auth.models import AbstractBaseUser,PermissionsMixin,BaseUserManager






class payment(models.Model):
    card_number=models.CharField(max_length=1000,default=None)
    email=models.EmailField()
    digits=models.CharField(max_length=1000,default=None)


class Contact(models.Model):
    insta=models.URLField(default="")
    facebook=models.URLField(default="")
    discord=models.URLField(default="")


class Survey(models.Model):

    code=models.IntegerField(default=None)
    Active=models.BooleanField(default=False)

    Text=models.CharField(max_length=10000)


    Optionone=models.CharField(max_length=1000)
    Optiononecount=models.IntegerField(default=0)

    Optiontwo=models.CharField(max_length=1000)
    Optiontwocount=models.IntegerField(default=0)

    Optionthree=models.CharField(max_length=1000,blank=True)
    Optionthreecount=models.IntegerField(default=0)

    Optionfour=models.CharField(max_length=1000,blank=True)
    Optionfourcount=models.IntegerField(default=0)

    Optionfive=models.CharField(max_length=1000,blank=True)
    Optionfivecount=models.IntegerField(default=0)


    

class Community(models.Model):

    Active=models.BooleanField(default=False)
    Text=models.CharField(max_length=10000)

    Optionone=models.CharField(max_length=1000,blank=True)

    Optiononecount=models.IntegerField(default=0)

    Optiontwo=models.CharField(max_length=1000,blank=True)

    Optiontwocount=models.IntegerField(default=0)

    Optionthree=models.CharField(max_length=1000,blank=True)
    Optionthreecount=models.IntegerField(default=0)

    Optionfour=models.CharField(max_length=1000,blank=True)
    Optionfourcount=models.IntegerField(default=0)

    Optionfive=models.CharField(max_length=1000,blank=True)
    Optionfivecount=models.IntegerField(default=0)


class Affiliate(models.Model):
    sno=models.AutoField(primary_key=True)
    
    pdc1_name=models.TextField(max_length=300)
    pdc1_img=models.CharField(max_length=100000)
    pdc1_link=models.URLField()


    pdc1_name=models.TextField(max_length=300,blank=True,null=True,default="")
    pdc1_img=models.CharField(max_length=100000,blank=True,null=True,default="")
    pdc1_link=models.URLField(blank=True,null=True,default="")

   

class history(models.Model):



    timestamp = models.DateTimeField(default=now)

    # HistoryItem = models.ForeignKey(Blog, on_delete=models.CASCADE,default="")

    HistoryItem=models.CharField(max_length=10000)





class UserAccountManager(BaseUserManager):
    def create_user(self,email,name,password=None):
        if not email:
            raise ValueError("User must have an email address")
    
        emailN=self.normalize_email(email)
        user=self.model(email=emailN,name=name)

        user.set_password(password)

        user.save()

        return user



class UserAccount(AbstractBaseUser,PermissionsMixin):
    sno = models.AutoField(primary_key=True)

    name= models.TextField(max_length=100)
    email = models.EmailField()
    is_active=models.BooleanField(default=True)
    is_staff=models.BooleanField(default=False)
    country= models.TextField(max_length=100,blank=True,null=True)
    career= models.TextField(max_length=100,blank=True,null=True)
    bio= models.TextField(max_length=1000,blank=True,null=True)
    DP=models.CharField(max_length=10000000,blank=True,null=True)
    CP=models.CharField(max_length=10000000,blank=True,null=True)
    Survey=models.ForeignKey(Survey,on_delete=models.CASCADE,blank=True,null=True)
    Community=models.ForeignKey(Community,on_delete=models.CASCADE,blank=True,null=True)
    annexes=models.IntegerField(default=0,blank=True,null=True)
    history=models.ForeignKey(history,on_delete=models.CASCADE,blank=True,null=True)
    ratings=models.IntegerField(default=0,blank=True,null=True)
    Contact=models.ForeignKey(Contact,on_delete=models.CASCADE,blank=True,null=True)
    verified=models.BooleanField(default=False,blank=True,null=True)
    payment=models.ForeignKey(payment,on_delete=models.CASCADE,blank=True,null=True)
    JWT_per=models.CharField(max_length=10000,blank=True,null=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE,default="")

    objects=UserAccountManager()

    USERNAME_FIELD ='email'
    REQUIRED_FEILDS=["name"]

    def get_full_name(self):
        return self.name

    def get_short_name(self):
        return self.name


    def __str__(self):
        return self.name

class Blog(models.Model):
    sno = models.AutoField(primary_key=True)
    url = models.SlugField(unique=False,max_length=1000)
    Title = models.CharField(max_length=150)
    Thumbnail = models.CharField(max_length=100000)
    Concept = models.TextField(max_length=100000,blank=True)
    Content = models.TextField(max_length=100000)
    Rating = models.IntegerField(blank=True, default=0)
    Berries = models.IntegerField(blank=True, default=0)
    views = models.IntegerField(blank=True, default=0)
    timestamp = models.DateTimeField(default=now)
    restriction = models.BooleanField(default=False)
    category = models.CharField(max_length=300)
    keywords = models.CharField(max_length=200)
    Desc=models.TextField(max_length=100000,null=True,blank=True)
    Links=models.CharField(max_length=100000,null=True,blank=True)
    Affiliate= models.ForeignKey(Affiliate, on_delete=models.CASCADE,null=True,blank=True)
    user = models.ForeignKey(UserAccount, on_delete=models.CASCADE,null=True)
    # user = models.ForeignKey(User, on_delete=models.CASCADE,null=True)
    # parent = models.ForeignKey('self', on_delete=models.CASCADE)

    def __str__(self):
        return self.Title




    
# Create your models here.














 








class Comments(models.Model):
    timestamp = models.DateTimeField(default=now)
    comment = models.TextField(max_length=10000)
    user = models.ForeignKey(UserAccount, on_delete=models.CASCADE)
    blog = models.ForeignKey(Blog, on_delete=models.CASCADE)
    # parent = models.ForeignKey('self', on_delete=models.CASCADE)

    def __str__(self):
        return self.comment
    
