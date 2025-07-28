// src/app/fashion/fashion.component.ts

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router'; // Import Router
import { Navbar } from '../../shared/navbar/navbar'; // Adjust path if necessary
import { Footer } from '../../shared/shared/footer/footer';
import { CartService } from '../../shared/cart/cart.service';// Adjust path if necessary

// Define Product interface for type safety (if not globally defined)
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
  selector: 'app-fashion',
  standalone: true,
  imports: [CommonModule, RouterModule, Navbar, Footer], // Add Navbar and Footer to imports
  templateUrl: './fashion.html',
  styleUrls: ['./fashion.scss']
})
export class FashionComponent implements OnInit {
  // Sample fashion products
  products: Product[] = [
    {
      id: 2,
      name: "High Quality Plus Size Nursing Bra",
      category: "Clothing",
      description: "Comfortable and supportive bra designed for new mothers.",
      image: 'https://images.unsplash.com/photo-1583394831850-6e7b8a0fa4b3?auto=format&fit=crop&w=600&h=400&q=80',
      price: 1548.83,
      oldPrice: 3295.75,
      badge: '',
      rating: 4,
      sold: 10000,
      discount: 53,
      deal: false,
      choice: true,
      freeShipping: 3381.28
    },
    {
      id: 3,
      name: "Shoes for Men Casual Slip on Fashion",
      category: "Footwear",
      description: "Stylish and comfortable slip-on shoes for everyday wear.",
      image: 'https://images.unsplash.com/photo-1608231387042-66d17712bbac?auto=format&fit=crop&w=600&h=400&q=80',
      price: 6604.04,
      oldPrice: 14222.47,
      badge: '',
      rating: 4,
      sold: 500,
      discount: 54,
      deal: false,
      choice: true,
      freeShipping: 3381.28
    },
    {
      id: 4,
      name: "Quick-drying Round Neck Sport T-shirt",
      category: "Clothing",
      description: "Breathable and lightweight T-shirt for sports and fitness.",
      image: 'https://images.unsplash.com/photo-1556906781-9a412961c28c?auto=format&fit=crop&w=600&h=400&q=80',
      price: 1983.21,
      oldPrice: 3639.57,
      badge: '',
      rating: 3,
      sold: 355,
      discount: 45,
      deal: false,
      choice: true,
      freeShipping: 3381.28
    },
    {
      id: 10,
      name: "Women's Yoga Leggings",
      category: "Clothing",
      description: "Stretchy, high-waisted leggings for yoga and casual wear.",
      image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=600&h=400&q=80',
      price: 2499.75,
      oldPrice: 3999.75,
      badge: '',
      rating: 4,
      sold: 650,
      discount: 38,
      deal: false,
      choice: true,
      freeShipping: 3381.28
    },
    {
      id: 12,
      name: "Men's Slim Fit Jeans",
      category: "Clothing",
      description: "Comfortable and stylish slim fit jeans for everyday wear.",
      image: 'https://images.unsplash.com/photo-1541099645167-a0b2715756c2?auto=format&fit=crop&w=600&h=400&q=80',
      price: 4500.00,
      oldPrice: 6000.00,
      badge: 'New',
      rating: 4.5,
      sold: 900,
      discount: 25,
      deal: false,
      choice: false,
      freeShipping: 3381.28
    },
    {
      id: 13,
      name: "Classic Leather Handbag",
      category: "Accessories",
      description: "Elegant and spacious leather handbag, perfect for any occasion.",
      image: 'https://images.unsplash.com/photo-1521447092928-87747806fdd0?auto=format&fit=crop&w=600&h=400&q=80',
      price: 8999.00,
      oldPrice: 12000.00,
      badge: '',
      rating: 4.8,
      sold: 300,
      discount: 25,
      deal: true,
      choice: true,
      freeShipping: 3381.28
    },
    {
      id: 14,
      name: "Unisex Sneakers",
      category: "Footwear",
      description: "Versatile and comfortable sneakers for all genders.",
      image: 'https://images.unsplash.com/photo-1595952906806-25ac07ac3118?auto=format&fit=crop&w=600&h=400&q=80',
      price: 3200.00,
      oldPrice: 4000.00,
      badge: '',
      rating: 4.2,
      sold: 700,
      discount: 20,
      deal: false,
      choice: true,
      freeShipping: 3381.28
    }
  ];

  wishlist: number[] = []; // Initialize an empty wishlist

  constructor(private router: Router, private cartService: CartService) {}

  ngOnInit(): void {
    // You can add any initialization logic here if needed
  }

  // Helper to get star icons for ratings
  getStars(rating: number): { full: number[]; half: boolean; empty: number[] } {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return {
      full: Array(fullStars).fill(0),
      half: hasHalfStar,
      empty: Array(emptyStars).fill(0)
    };
  }

  // Add product to cart using CartService
  addToCart(product: Product): void {
    this.cartService.addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image
    });
    alert(`${product.name} added to cart!`);
  }

  // Add to cart and then navigate to the cart page
  buyNow(product: Product): void {
    this.addToCart(product);
    this.router.navigate(['/cart']);
  }

  // Toggle product in wishlist
  toggleWishlist(productId: number): void {
    if (this.isInWishlist(productId)) {
      this.wishlist = this.wishlist.filter(id => id !== productId);
      console.log('Removed from wishlist:', productId);
    } else {
      this.wishlist.push(productId);
      console.log('Added to wishlist:', productId);
    }
  }

  // Check if product is in wishlist
  isInWishlist(productId: number): boolean {
    return this.wishlist.includes(productId);
  }

  // Navigate to product detail page
  viewProduct(productId: number): void {
    this.router.navigate(['/product', productId]);
  }
}