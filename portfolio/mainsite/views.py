# from django.contrib.gis.geoip2 import GeoIP2
from django.http import HttpResponse
from django.shortcuts import render
from django.template import loader
from django.utils import timezone

from .models import SocialMedia, Task, Access

from functools import wraps

# g = GeoIP2()

# Create your views here.

# def index(request):
#     render(request, 'mainsite/index.html')

IP_BLACKLIST = [
    '73.145.170.185',
]

def get_client_ip(request):
    """
    https://stackoverflow.com/questions/30558929/django-get-user-ip-from-development-server/30558984
    """
    x_forwarded_for = request.META.get('HTTP_X_FORWARDED_FOR')
    if x_forwarded_for:
        ip = x_forwarded_for.split(',')[-1].strip()
    elif request.META.get('HTTP_X_REAL_IP'):
        ip = request.META.get('HTTP_X_REAL_IP')
    else:
        ip = request.META.get('REMOTE_ADDR')
    return ip


def register_access(view):
    @wraps(view)
    def register(request):
        ip = get_client_ip(request)
        if ip in IP_BLACKLIST:
            return view(request)
        access_date = timezone.now()
        # loc_data = g.city(str(ip))  # GeoIP2 is not free
        # city = loc_data['city']
        # country = loc_data['country_name']
        # continent = loc_data['continent_name']
        Access.objects.new_access(ip, access_date)  # , city, country, continent)
        return view(request)
    return register


@register_access
def index(request):
    # template = loader.get_template('mainsite/index.html')
    context = {
        'social_media': SocialMedia.objects.filter(),
        'tasks': Task.objects.filter(),
    }
    return render(request, 'mainsite/index2.html', context)  # HttpResponse(template.render({}, request))

@register_access
def do_not_click(request):
    return render(request, 'mainsite/do_not_click.html')


@register_access
def fluid_sim(request):
    return render(request, 'mainsite/fluid_sim.html')
