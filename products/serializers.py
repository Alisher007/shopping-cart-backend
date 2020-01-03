from rest_framework import serializers
from products.models import Category, Product

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = [
            'pk',
            'name',
            'slug',
        ]
        read_only_fields = ['pk']
        
class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = [
            'pk',
            'category',
            'name',
            'slug',
            'description',
            'price',
            'available',
            'quantity',
            'stock',
        ]
        read_only_fields = ['pk']
