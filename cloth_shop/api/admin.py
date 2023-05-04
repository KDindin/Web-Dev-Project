from django.contrib import admin

from django.contrib import admin
from .models import Category, Product, User


@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    list_display = ('id', 'email', 'password')


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ['name']


# @admin.register(Card)
# class CardAdmin(admin.ModelAdmin):
#     list_display = ('id', 'cvv', 'number', 'owner')


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'description', 'cost', 'imageURL', 'category_id')

