import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Navbar } from '../../shared/navbar/navbar';
import { Footer } from '../../shared/shared/footer/footer';
import { CartService } from '../../shared/cart/cart.service';


interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
}

@Component({
  selector: 'app-electronics-product',
  standalone: true,
  imports: [CommonModule, RouterModule ,Navbar, Footer],
  templateUrl: './electronics-product.html',
  styleUrls: ['./electronics-product.scss']
})
export class ElectronicsProductComponent {
  products: Product[] = [
    {
      id: 1,
      name: 'Wireless Headphones',
      description: 'Noise-cancelling, Bluetooth 5.2, 30h battery',
      image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=600&h=400&q=80',
      price: 99.99
    },
    {
      id: 2,
      name: 'Smartphone X Pro',
      description: '6.7" OLED, 5G, 128GB, triple camera',
      image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&h=400&q=80',
      price: 799.99
    },
    {
      id: 3,
      name: 'Bluetooth Speaker',
      description: '360° sound, waterproof, 20h playtime',
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&h=400&q=80',
      price: 49.99
    },
    {
      id: 4,
      name: 'Smartwatch',
      description: 'Fitness tracking, heart rate, GPS',
      image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&h=400&q=80',
      price: 199.99
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
} 