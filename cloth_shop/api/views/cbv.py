from rest_framework import status

from rest_framework.views import APIView
from rest_framework.response import Response

from api.serializers import UserSerializer, CategorySerializer, ProductSerializer
from api.models import Category, Product, User


class CategoryListAPIView(APIView):
    def get(self, request):
        categories = Category.objects.all()
        serializer = CategorySerializer(categories, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = CategorySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class CategoryDetailAPIView(APIView):
    def get_object(self, category_id):
        try:
            return Category.objects.get(pk=category_id)
        except Category.DoesNotExist as e:
            return Response(str(e), status=status.HTTP_400_BAD_REQUEST)

    def get(self, request, category_id):
        instance = self.get_object(category_id)
        serializer = CategorySerializer(instance)
        return Response(serializer.data)

    def put(self, request, category_id):
        instance = self.get_object(category_id)
        serializer = CategorySerializer(instance=instance, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, category_id):
        instance = self.get_object(category_id)
        instance.delete()
        return Response({'deleted': True})


class ProductListAPIView(APIView):
    def get(self, request):
        categories = Product.objects.all()
        serializer = ProductSerializer(categories, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = ProductSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class UserListAPIView(APIView):
    def get(self, request):
        users = User.objects.all()
        serializer = UserSerializer(users, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ProductDetailAPIView(APIView):
    def get_object(self, product_id):
        try:
            return Product.objects.get(pk=product_id)
        except Product.DoesNotExist as e:
            return Response(str(e), status=status.HTTP_400_BAD_REQUEST)

    def get(self, request, product_id):
        instance = self.get_object(product_id)
        serializer = ProductSerializer(instance)
        return Response(serializer.data)

    def put(self, request, product_id):
        instance = self.get_object(product_id)
        serializer = ProductSerializer(instance=instance, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, category_id):
        instance = self.get_object(category_id)
        instance.delete()
        return Response({'deleted': True})


class UserInfoAPIView(APIView):
    def get_object(self, user_id):
        try:
            return User.objects.get(pk=user_id)
        except User.DoesNotExist as e:
            return Response(str(e), status=status.HTTP_400_BAD_REQUEST)

    def get(self, request, user_id):
        instance = self.get_object(user_id)
        serializer = UserSerializer(instance)
        return Response(serializer.data)

    def put(self, request, user_id):
        instance = self.get_object(user_id)
        serializer = UserSerializer(instance=instance, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, user_id):
        instance = self.get_object(user_id)
        instance.delete()
        return Response({'deleted': True})
