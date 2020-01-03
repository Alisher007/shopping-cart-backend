from django.shortcuts import render

# Create your views here.
from django.db.models import Q
from rest_framework import generics, mixins
from products.models import Category, Product
# from .permissions import IsOwnerOrReadOnly
from .serializers import CategorySerializer, ProductSerializer
class CategoryCreateView(generics.CreateAPIView): #  CreateView 
    lookup_field = 'pk' # slug, id # url(r'?P<pk>\d+')
    serializer_class = CategorySerializer
    queryset = Category.objects.all()

class ProductCreateView(generics.CreateAPIView): #  CreateView 
    lookup_field = 'pk' # slug, id # url(r'?P<pk>\d+')
    serializer_class = ProductSerializer
    queryset = Product.objects.all()

class CategoryListView(generics.ListAPIView): # List
    lookup_field = 'pk' # slug, id # url(r'?P<pk>\d+')
    serializer_class = CategorySerializer
    #queryset = Category.objects.all()
    def get_queryset(self):
        qs = Category.objects.all()
        return qs

class ProductListView(generics.ListAPIView): # List
    lookup_field = 'pk' # slug, id # url(r'?P<pk>\d+')
    serializer_class = ProductSerializer
    #queryset = Product.objects.all()
    def get_queryset(self):
        qs = Product.objects.all()
        return qs


class CategoryRudView(generics.RetrieveUpdateDestroyAPIView): # DetailView Update  Delete

    lookup_field = 'pk' # slug, id # url(r'?P<pk>\d+')
    serializer_class = CategorySerializer

    def get_queryset(self):
        return Category.objects.all()

class ProductRudView(generics.RetrieveUpdateDestroyAPIView): # DetailView Update  Delete

    lookup_field = 'pk' # slug, id # url(r'?P<pk>\d+')
    serializer_class = ProductSerializer

    def get_queryset(self):
        return Product.objects.all()