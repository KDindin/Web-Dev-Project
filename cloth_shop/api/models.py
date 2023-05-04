from django.db import models


# Create your models here.
class User(models.Model):
    email = models.CharField(max_length=100, blank=True)
    password = models.CharField(max_length=100, blank=True)
    firstName = models.CharField(max_length=100, blank=True, default="FirstName")
    lastName = models.CharField(max_length=100, blank=True,   default="LastName",)
    userName = models.CharField(max_length=100, blank=True,  default="PhoneNumber")

    class Meta:
        verbose_name = 'User'
        verbose_name_plural = 'Users'

    def to_json(self):
        return {
            'id': self.id,
            'email': self.email,
            'password': self.password,
            'firstName': self.firstName,
            'lastName': self.lastName,
            'userName': self.userName,
        }


# class Card(models.Model):
#     cvv = models.CharField(max_length=100)
#     number = models.CharField(max_length=100)
#     owner = models.ForeignKey(User, on_delete=models.CASCADE,
#                               related_name='cards')
#
#     class Meta:
#         verbose_name = 'Card'
#         verbose_name_plural = 'Cards'
#
#     def to_json(self):
#         return {
#             'id': self.id,
#             'cvv': self.cvv,
#             'number': self.number,
#             'owner': self.owner.to_json(),
#         }


class Category(models.Model):
    name = models.CharField(max_length=100, blank=True)

    class Meta:
        verbose_name = 'Category'
        verbose_name_plural = 'Categories'

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
        }


class Product(models.Model):
    title = models.CharField(max_length=100, blank=True)
    description = models.TextField(blank=True)
    cost = models.FloatField(blank=True)
    imageURL = models.CharField(max_length=100, blank=True)
    # card = models.ForeignKey(Card, on_delete=models.CASCADE,
    #                          related_name='products')
    category = models.ForeignKey(Category, on_delete=models.CASCADE,
                                 related_name='products', blank=True
                                 )

    class Meta:
        verbose_name = 'Product'
        verbose_name_plural = 'Products'

    def to_json(self):
        return {
            'id': self.id,
            'title': self.title,
            'description': self.description,
            'cost': self.cost,
            'category': self.category.to_json(),
            # 'card': self.card.to_json()
        }
