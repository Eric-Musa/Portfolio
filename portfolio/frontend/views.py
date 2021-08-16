from django.shortcuts import render
from django.apps import apps
SocialMedia = apps.get_model('api', 'SocialMedia')
Task = apps.get_model('api', 'Task')

# Create your views here.


def index(request):
    context = {
        'social_media': SocialMedia.objects.filter(),
        'tasks': Task.objects.filter(),
    }
    return render(request, 'frontend/index.html', context)

def test(request, *args, **kwargs):
    return render(request, 'frontend/test.html')