from django.contrib import admin

# Register your models here.
from .models import SocialMedia, Task, Access

admin.site.register(SocialMedia)
admin.site.register(Task)
admin.site.register(Access)
