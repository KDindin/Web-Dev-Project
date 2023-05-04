from api.models import Category, Product, User
from rest_framework import serializers


# class UserSerializer(serializers.Serializer):
#     id = serializers.IntegerField(read_only=True)
#     email = serializers.CharField()
#     password = serializers.CharField()
#     firstName = serializers.CharField()
#     lastName = serializers.CharField()
#     phoneNumber = serializers.CharField()
#
#     def create(self, validated_data):
#         user = User.objects.create(
#             id=validated_data.id,
#             email=validated_data.email,
#             password=validated_data.password,
#         )
#         return user
#
#     def update(self, instance, validated_data):
#         instance.email = validated_data.get('email', instance.email)
#         instance.firstName = validated_data.get('firstName', instance.firstName)
#         instance.lastName = validated_data.get('lastName', instance.lastName)
#         instance.phoneNumber = validated_data.get('phoneNumber', instance.phoneNumber)
#         instance.save()
#         return instance


# class CardSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Card
#         fields = ('id', 'cvv', 'number', 'owner')


class CategorySerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField()

    def create(self, validated_data):
        category = Category.objects.create(**validated_data)
        return category

    def update(self, instance, validated_data):
        instance.name = validated_data.get('name', instance.name)
        instance.save()
        return instance


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ('id', 'title', 'description', 'cost', 'imageURL', 'category')


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'email', 'password', 'firstName', 'lastName', 'userName')
