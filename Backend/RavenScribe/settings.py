from pathlib import Path
import os
from datetime import timedelta

# mimetypes.add_type("text/javascript", ".js", True)

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/3.2/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'django-insecure-(znty454zn_(+wnaf1on*u5h4atqo_g*k(k^95*8u30et7dlud'

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

ALLOWED_HOSTS = []


# Application definition


INSTALLED_APPS = [
    'FetchSubmit',
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    # 'django.contrib.auth.middleware.AuthenticationMiddleware',
    # 'django_otp.middleware.OTPMiddleware', 


    'rest_framework',

    # 'django.contrib.sites',
    'allauth.socialaccount',

    'allauth',
    'allauth.account',
    'rest_auth.registration',

    'rest_framework.authtoken',

    'rest_auth',
    'corsheaders',

    'djoser',
    "django_nextjs",

    # 'accounts',
]

MIDDLEWARE = [
    'corsheaders.middleware.CorsMiddleware',

    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'RavenScribe.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [os.path.join(BASE_DIR, 'build')],
        # os.path.join(BASE_DIR,'build')
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'RavenScribe.wsgi.application'




DATABASES = {
    'default': {
         'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'ravenscribedb',
        'USER': 'sapindaceae',
        'PASSWORD': 'neonazi101',
        'HOST': '127.0.0.1',
        'PORT': '5432',
      
    }
}

DJOSER={
    'LOGIN_FIELD':'email',
    'USER_CREATE_PASSWORD_RETYPE':True,
    # 'USERNAME_CHANGED_EMAIL_CONFIRMATION':True,
    'PASSWORD_CHANGED_EMAIL_CONFIRMATION':True,
    'SEND_CONFIRMATION_EMAIL':True,
    # 'SET_USERNAME_RETYPE':True,
    'SET_PASSWORD_RETYPE':True,
    'PASSWORD_RESET_CONFIRM_URL':'password/reset/confirm/{uid}/{token}',
    'ACTIVATION_URL':'activate/{uid}/{token}',
    'SEND_ACTIVATION_EMAIL':True,
    "SERIALIZERS":{

        'user_create':'FetchSubmit.api.serializers.UserCreateSerializer',

        'user':'FetchSubmit.api.serializers.UserCreateSerializer',


        'user_delete':'djoser.serializers.UserDeleteSerializer',

    }

}

REST_FRAMEWORK = {
    'DEFAULT_PERMISSION_CLASSES': [
        'rest_framework.permissions.IsAuthenticated',
    ],
    'DEFAULT_AUTHENTICATION_CLASSES': (
        

        'rest_framework_simplejwt.authentication.JWTAuthentication',
        # 'rest_framework.permissions.AllowAny', 
   
    ),


}


SIMPLE_JWT = {
   'AUTH_HEADER_TYPES': ('JWT',),
    'ACCESS_TOKEN_LIFETIME': timedelta(minutes=1440),
    'REFRESH_TOKEN_LIFETIME': timedelta(days=365),
}


# Password validation
# https://docs.djangoproject.com/en/3.2/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


# Internationalization
# https://docs.djangoproject.com/en/3.2/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_L10N = True

USE_TZ = True


STATIC_URL = '/static/'
STATICFILES_DIRS=[
    os.path.join(BASE_DIR,'build/static')
]

STATIC_ROOT= os.path.join(BASE_DIR,'static')

# Default primary key field type
# https://docs.djangoproject.com/en/3.2/ref/settings/#default-auto-field

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'

AUTH_USER_MODEL = 'FetchSubmit.UserAccount'


# CSRF_COOKIE_SECURE=True

EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'

EMAIL_USE_TLS = True
EMAIL_HOST = 'smtp.gmail.com'
EMAIL_PORT = 587

EMAIL_HOST_USER= 'thetestingsalt@gmail.com'
EMAIL_HOST_PASSWORD= 'snunluidgvqjrqmk'

EMAIL_USE_TLS=True




CORS_ORIGIN_WHITELIST = (

    'http://127.0.0.1:3000',

)
CORS_ALLOW_HEADERS = [
    'X-CSRFTOKEN',
    'csrftoken',
    'X-XSRF-TOKEN',
    'content-type',
    'x-requested-with',
    'Authorization',
    'Set-Cookie'
]

CORS_ALLOW_CREDENTIALS = True


CSRF_HEADER_NAME = 'HTTP_X_CSRFTOKEN'
CSRF_COOKIE_NAME = 'X-CSRFTOKEN'
# CORS_ALLOW_HEADERS = [
#     'X-CSRFTOKEN',
#     'csrftoken',
#     'X-XSRF-TOKEN',
#     'content-type',
#     'x-requested-with',
#     'Authorization',
#     'Set-Cookie'
# ]
CORS_ALLOW_ORIGIN = ['http://127.0.0.1:3000']
CSRF_TRUSTED_ORIGINS = ['http://127.0.0.1:3000','http://127.0.0.1:8000/']
CSRF_COOKIE_DOMAIN = 'http://127.0.0.1:3000'
CSRF_COOKIE_PATH = 'http://127.0.0.1:3000'
# SESSION_COOKIE_DOMAIN = 'http://localhost:3000'
# SESSION_COOKIE_DOMAIN = ['http://localhost:3000','http://127.0.0.1:8000/']

CSRF_COOKIE_DOMAIN = '127.0.0.1'

CSRF_COOKIE_SECURE=False