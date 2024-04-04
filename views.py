from django.shortcuts import render
from shopback.models import Product, Category
from django.http import JsonResponse

# Create your views here.
def product_list(request):
    products = Product.objects.all()
    data = {
        'products': list(products.values())
    }
    return JsonResponse(data)

def product(request, id):
    products = Product.objects.get(id = id)
    data = {
        'product': {
            'name': products.name,
            'price': products.price,
            'description': products.description,
            'count': products.count,
            'is_active': products.is_active,
        }
    }
    return JsonResponse(data)

def category(request, id):
    categoriess = Category.objects.get(id = id)
    data = {
        'category': {
            'name': categoriess.name,
        }
    }
    return JsonResponse(data)

def categories(request):
    categoriess = Category.objects.all()
    data = {
        'categories': list(categoriess.values())
    }
    return JsonResponse(data)

def prod_in_cat(request, id):
    prods = Product.objects.filter(id = id)
    data = {
        'products' : list(prods.values())
    }
    return JsonResponse(data)
