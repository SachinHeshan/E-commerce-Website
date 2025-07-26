import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Footer } from '../../shared/shared/footer/footer';
import { Navbar } from '../../shared/navbar/navbar';

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
}

@Component({
  selector: 'app-new-arrivals',
  standalone: true,
  imports: [CommonModule, RouterModule, Navbar,Footer],
  templateUrl: './new-arrivals.html',
  styleUrls: ['./new-arrivals.scss']
})
export class NewArrivalsComponent {
  products: Product[] = [
    {
      id: 1,
      name: 'Wireless Earbuds',
      description: 'Latest Bluetooth 5.2, noise-cancelling',
      image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=600&h=400&q=80',
      price: 59.99
    },
    {
      id: 2,
      name: 'Smart Fitness Watch',
      description: 'Track your health and fitness in style',
      image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&h=400&q=80',
      price: 129.99
    },
    {
      id: 3,
      name: 'Eco-Friendly Water Bottle',
      description: 'Reusable, BPA-free, keeps drinks cold 24h',
      image: 'https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=600&h=400&q=80',
      price: 24.99
    },
    {
      id: 4,
      name: 'Minimalist Backpack',
      description: 'Lightweight, durable, and stylish',
      image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=600&h=400&q=80',
      price: 79.99
    }
  ];
} 