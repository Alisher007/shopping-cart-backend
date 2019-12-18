from django.urls import path
from .views import (
    CategoryRudView, 
    CategoryCreateView, 
    CategoryListView, 
    ProductRudView, 
    ProductCreateView, 
    ProductListView
    )
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

app_name='products'
urlpatterns = [
    path('api/token/', 
        TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('', ProductListView.as_view(), name='product-list'),
    path('create/', ProductCreateView.as_view(), name='product-create'),
    path('<int:pk>/', ProductRudView.as_view(), name='product-rud'),
    path('category/', CategoryListView.as_view(), name='category-list'),
    path('category/create/', CategoryCreateView.as_view(), name='category-create'),
    path('category/<int:pk>/', CategoryRudView.as_view(), name='category-rud'),
]
