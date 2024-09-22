from django.contrib import admin
from .models import Planet,Rocket

# Register the Planet model with the admin interface
@admin.register(Planet)
class PlanetAdmin(admin.ModelAdmin):
    list_display = ('name', 'description')
    search_fields = ('name', 'description')

admin.site.register(Rocket)






