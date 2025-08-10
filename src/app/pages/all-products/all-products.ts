import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Navbar } from '../../shared/navbar/navbar';
import { Footer } from '../../shared/shared/footer/footer';
import { CartService } from '../../shared/cart/cart.service';

interface Product {
  id: number;
  name: string;
  category: string;
  description: string;
  image: string;
  price: number;
  oldPrice?: number;
  badge?: string;
  rating?: number;
  sold?: number;
  discount?: number;
  deal?: boolean;
  choice?: boolean;
  freeShipping?: number;
}

@Component({
  selector: 'app-all-products',
  standalone: true,
  imports: [CommonModule, RouterModule, Navbar, Footer],
  templateUrl: './all-products.html',
  styleUrls: ['./all-products.scss']
})
export class AllProductsComponent {
  products: Product[] = [
    {
      id: 1,
      name: 'Wireless Headphones',
      category: 'Electronics',
      description: 'Noise-cancelling, Bluetooth 5.2, 30h battery',
      image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=600&h=400&q=80',
      price: 2872.64,
      oldPrice: 5990.64,
      badge: '1/6 PCS',
      rating: 4,
      sold: 800,
      discount: 1,
      deal: true,
      choice: true,
      freeShipping: 3381.28
    },
    {
      id: 2,
      name: 'High Quality Plus Size Nursing Bra',
      category: 'Fashion',
      description: 'Pregnancy + lactation, gathered prevents sagging',
      image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&h=400&q=80',
      price: 1548.83,
      oldPrice: 3295.75,
      badge: '',
      rating: 5,
      sold: 10000,
      discount: 2,
      deal: true,
      choice: true,
      freeShipping: 3381.28
    },
    {
      id: 3,
      name: 'Shoes for Men Casual Slip on',
      category: 'Sports & Outdoors',
      description: 'Comfortable, stylish, and durable',
      image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=600&h=400&q=80',
      price: 6604.04,
      oldPrice: 14222.47,
      badge: '',
      rating: 4,
      sold: 500,
      discount: 1,
      deal: false,
      choice: true,
      freeShipping: 3381.28
    },
    {
      id: 4,
      name: 'Quick-drying Round Neck Sport T-shirt',
      category: 'Fashion',
      description: 'Breathable, quick-drying, comfortable',
      image: 'https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=600&h=400&q=80',
      price: 1983.21,
      oldPrice: 3639.57,
      badge: '',
      rating: 4,
      sold: 355,
      discount: 1,
      deal: false,
      choice: true,
      freeShipping: 3381.28
    },
    {
      id: 5,
      name: 'Running T-shirt Men Summer Ice Silk',
      category: 'Fashion',
      description: 'Cool, comfortable, and stylish',
      image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=600&h=400&q=80',
      price: 2930.71,
      oldPrice: 5746.91,
      badge: '',
      rating: 5,
      sold: 10000,
      discount: 1,
      deal: false,
      choice: true,
      freeShipping: 3381.28
    }
  ];

  constructor(private cartService: CartService) {}

  addToCart(product: Product) {
    this.cartService.addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image
    });
  }

  buyNow(product: Product) {
    // For now, just add to cart and navigate to cart
    this.addToCart(product);
    window.location.href = '/cart';
  }
} 