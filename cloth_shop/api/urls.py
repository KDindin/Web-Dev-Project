from django.urls import path
from rest_framework_jwt.views import obtain_jwt_token

from api import views

# from rest_framework_simplejwt.views import (
#     TokenObtainPairView,
#     TokenRefreshView,
# )

    # admin, bossmanager

urlpatterns = [

    path('login/', obtain_jwt_token),
    path('register/', views.cbv.UserListAPIView.as_view()),

    # fbv
    path('categories/', views.categories_list),
    path('categories/<int:category_id>/products/', views.products_by_category),
    # path('products/', views.products_list),
    # path('products/<int:product_id>/', views.product_detail),

    # cbv
    # path('categories/', views.CategoryListAPIView.as_view()),
    path('categories/<int:category_id>/', views.cbv.CategoryDetailAPIView.as_view()),
    path('products/', views.ProductListAPIView.as_view()),
    path('products/<int:product_id>/', views.ProductDetailAPIView.as_view()),


    path('users/', views.cbv.UserListAPIView.as_view()),
    path('users/<int:user_id>', views.UserInfoAPIView.as_view()),

    # path('card/<int:user_id/products/>', views.card_detail),
    # path('login/', TokenObtainPairView.as_view()),
    # path('login/token-refresh/', TokenRefreshView.as_view()),



]