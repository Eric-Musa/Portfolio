from django.http import HttpResponse

# Create your views here.


def test(request):
    return HttpResponse("Hello, world. You're contacting a Django REST API.")
