from django.db import models
# from django.utils import timezone
import datetime
import pytz

# Create your models here.

TIMEZONE = 'US/EASTERN'


class SocialMedia(models.Model):
    title = models.CharField(max_length=50)
    hyperlink = models.CharField(max_length=200)

    def __str__(self) -> str:
        return self.title


class Task(models.Model):
    task = models.CharField(max_length=200)
    pub_date = models.DateTimeField('date published')
    fin_date = models.DateTimeField('date completed', blank=True, null=True)

    def __str__(self) -> str:
        return self.task


class AccessManager(models.Manager):

    def new_access(self, ipv4, access_date):  # , city, country, continent):
        return self.create(ipv4=ipv4, access_date=access_date)  # , city=city, country=country, continent=continent)


class Access(models.Model):
    ipv4 = models.CharField(max_length=200)
    access_date = models.DateTimeField('date of website access')
    # city = models.CharField(max_length=200)
    # country = models.CharField(max_length=200)
    # continent = models.CharField(max_length=200)
    objects = AccessManager()

    def __str__(self) -> str:
        tz_date = self.access_date.astimezone(pytz.timezone(TIMEZONE))
        date_str = tz_date.strftime('%H:%M:%S %d %b, %Y')
        return f'{self.ipv4} accessed the website on {date_str}'