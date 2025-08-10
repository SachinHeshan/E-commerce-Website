// src/app/categories/categories.component.ts

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router'; // Ensure Router is imported
import { Navbar } from '../../shared/navbar/navbar';
import { Footer } from '../../shared/shared/footer/footer';

interface Category {
  id: number;
  name: string;
  description: string;
  image: string;
  productCount: number;
  link: string; // <-- This is crucial for dynamic navigation
}

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule, RouterModule, Navbar, Footer],
  templateUrl: './categories.html', // Make sure this points to your HTML file
  styleUrls: ['./categories.scss']
})
export class CategoriesComponent {
  categories: Category[] = [
    {
      id: 1,
      name: 'Electronics',
      description: 'Latest gadgets and electronic devices',
      image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80',
      productCount: 156,
      link: '/category/electronics' // Example: if you have a specific route for electronics
    },
    {
      id: 2,
      name: 'Fashion',
      description: 'Trendy clothing and accessories',
      image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80',
      productCount: 234,
      link: '/fashion' // <-- THIS IS THE TARGET LINK FOR FASHION
    },
    {
      id: 3,
      name: 'Home & Garden',
      description: 'Everything for your home and garden',
      image: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80',
      productCount: 89,
      link: '/category/home-garden' // Example of another dynamic link
    },
    {
      id: 4,
      name: 'Sports & Outdoors',
      description: 'Sports equipment and outdoor gear',
      image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80',
      productCount: 67,
      link: '/category/sports-outdoors'
    },
    {
      id: 5,
      name: 'Books & Media',
      description: 'Books, movies, and entertainment',
      image: 'https://images.unsplash.com/photo-1495640388908-05fa85288e61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80',
      productCount: 123,
      link: '/category/books-media'
    },
    {
      id: 6,
      name: 'Health & Beauty',
      description: 'Health products and beauty essentials',
      image: 'https://images.unsplash.com/photo-1571221775266-99052b634863?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      productCount: 98,
      link: '/category/health-beauty'
    }
  ];

  get totalProducts(): number {
    return this.categories.reduce((total, cat) => total + cat.productCount, 0);
  }

  // Inject the Router service
  constructor(private router: Router) { }

  onCategoryClick(category: Category): void {
    console.log('Category clicked:', category.name, 'Navigating to:', category.link);
    // Use the Router service to navigate to the link defined in the category object
    this.router.navigate([category.link]);
  }
}