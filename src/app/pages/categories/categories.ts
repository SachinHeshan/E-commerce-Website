import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Navbar } from '../../shared/navbar/navbar';
import { Footer } from '../../shared/shared/footer/footer';

interface Category {
  id: number;
  name: string;
  description: string;
  image: string;
  productCount: number;
}

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule, RouterModule, Navbar, Footer],
  templateUrl: './categories.html',
  styleUrls: ['./categories.scss']
})
export class CategoriesComponent {
    categories: Category[] = [
      {
        id: 1,
        name: 'Electronics',
        description: 'Latest gadgets and electronic devices',
        image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80',
        productCount: 156
      },
      {
        id: 2,
        name: 'Fashion',
        description: 'Trendy clothing and accessories',
        image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80',
        productCount: 234
      },
      {
        id: 3,
        name: 'Home & Garden',
        description: 'Everything for your home and garden',
        image: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80',
        productCount: 89
      },
      {
        id: 4,
        name: 'Sports & Outdoors',
        description: 'Sports equipment and outdoor gear',
        image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80',
        productCount: 67
      },
      {
        id: 5,
        name: 'Books & Media',
        description: 'Books, movies, and entertainment',
        image: 'https://images.unsplash.com/photo-1495640388908-05fa85288e61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80',
        productCount: 123
      },
      {
        id: 6,
        name: 'Health & Beauty',
        description: 'Health products and beauty essentials',
        image: 'data:image/jpeg;base64,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',
        productCount: 98
      }
    ];
  

  get totalProducts(): number {
    return this.categories.reduce((total, cat) => total + cat.productCount, 0);
  }

  onCategoryClick(category: Category): void {
    console.log('Category clicked:', category.name);
    // TODO: Navigate to category products page
  }
} 