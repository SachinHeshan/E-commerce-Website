import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { Footer } from '../../shared/shared/footer/footer';
import { Navbar } from '../../shared/navbar/navbar';

// Define interfaces for type safety
interface Category {
  name: string;
  icon: string;
  link: string;
}

interface Brand {
  name: string;
  logo: string;
}

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


interface Testimonial {
  name: string;
  image: string;
  rating: number;
  text: string;
  date: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, Footer, Navbar],
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class HomeComponent implements OnInit {
  categories: Category[] = [
    { name: 'Electronics', icon: 'bi-phone', link: '/category/electronics' },
    { name: 'Fashion', icon: 'bi-bag', link: '/category/fashion' },
    { name: 'Home', icon: 'bi-house', link: '/category/home' },
    { name: 'Beauty', icon: 'bi-flower1', link: '/category/beauty' },
    { name: 'Sports', icon: 'bi-bicycle', link: '/category/sports' },
    { name: 'Books', icon: 'bi-book', link: '/category/books' }
  ];

  brands: Brand[] = [
    { name: 'Apple', logo: 'https://logos-world.net/wp-content/uploads/2020/04/Apple-Logo.png' },
    { name: 'Samsung', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/2560px-Samsung_Logo.svg.png' },
    { name: 'Nike', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Logo_NIKE.svg/1200px-Logo_NIKE.svg.png' },
    { name: 'Adidas', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Adidas_Logo.svg/2560px-Adidas_Logo.svg.png' },
    { name: 'Sony', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Sony_logo.png/800px-Sony_logo.png' },
    { name: 'Bosch', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Bosch-logo.svg/2560px-Bosch-logo.svg.png' }
  ];

  products: Product[] = [
    {
      id: 1,
      name: "Wireless Headphones",
      category: "Electronics",
      description: "High-quality wireless headphones with noise cancellation.",
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&h=400&q=80',
      price: 2872.64,
      oldPrice: 3990.64,
      badge: '',
      rating: 4,
      sold: 800,
      discount: 28,
      deal: false,
      choice: true,
      freeShipping: 3381.28
    },
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
      id: 6,
      name: "Portable Bluetooth Speaker with Deep Bass",
      category: "Electronics",
      description: "Compact and powerful speaker for music on the go. Long-lasting battery.",
      image: 'https://images.unsplash.com/photo-1560706213-9aa725ec35b7?auto=format&fit=crop&w=600&h=400&q=80',
      price: 4999.00,
      oldPrice: 6500.00,
      badge: '',
      rating: 4,
      sold: 800,
      discount: 23,
      deal: false,
      choice: false,
      freeShipping: 3381.28
    },
    {
      id: 7,
      name: "Smart Fitness Tracker Watch",
      category: "Electronics",
      description: "Track your steps, heart rate, and sleep with this sleek smartwatch.",
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&h=400&q=80',
      price: 3499.99,
      oldPrice: 4999.99,
      badge: 'New',
      rating: 4.5,
      sold: 1200,
      discount: 30,
      deal: true,
      choice: true,
      freeShipping: 3381.28
    },
    {
      id: 8,
      name: "Men's Waterproof Hiking Boots",
      category: "Footwear",
      description: "Durable boots for outdoor adventures, waterproof and comfortable.",
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&h=400&q=80',
      price: 7899.50,
      oldPrice: 9999.50,
      badge: '',
      rating: 4,
      sold: 450,
      discount: 21,
      deal: false,
      choice: true,
      freeShipping: 3381.28
    },
    {
      id: 9,
      name: "Wireless Charging Pad",
      category: "Electronics",
      description: "Fast and efficient wireless charger for smartphones and earbuds.",
      image: 'https://images.unsplash.com/photo-1584479925755-2a7c1e8f4b5b?auto=format&fit=crop&w=600&h=400&q=80',
      price: 1999.00,
      oldPrice: 2999.00,
      badge: 'Hot',
      rating: 3.5,
      sold: 2000,
      discount: 33,
      deal: true,
      choice: false,
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
      id: 11,
      name: "Stainless Steel Water Bottle",
      category: "Accessories",
      description: "Insulated bottle to keep drinks hot or cold for hours.",
      image: 'https://images.unsplash.com/photo-1602143407151-721f548c73f0?auto=format&fit=crop&w=600&h=400&q=80',
      price: 1599.00,
      oldPrice: 2499.00,
      badge: 'Eco-Friendly',
      rating: 4.5,
      sold: 300,
      discount: 36,
      deal: false,
      choice: true,
      freeShipping: 3381.28
    }
];



  testimonials: Testimonial[] = [
    {
      name: 'Sarah Johnson',
      image: 'https://randomuser.me/api/portraits/women/32.jpg',
      rating: 5,
      text: 'The delivery was incredibly fast and the product quality exceeded my expectations. Will definitely shop here again!',
      date: 'July 15, 2023'
    },
    {
      name: 'Michael Chen',
      image: 'https://randomuser.me/api/portraits/men/44.jpg',
      rating: 4.5,
      text: 'Excellent customer service! They helped me choose the perfect product and even offered a discount on my next purchase.',
      date: 'July 18, 2023'
    },
    {
      name: 'Emma Rodriguez',
      image: 'https://randomuser.me/api/portraits/women/68.jpg',
      rating: 5,
      text: 'The return process was so easy when I needed to exchange a size. This store has earned a loyal customer in me.',
      date: 'July 22, 2023'
    }
  ];

  featuredCategories = ['Electronics', 'Fashion', 'Home', 'Beauty'];
  selectedCategory = 'Electronics';
  newsletterEmail = '';

  countdown = {
    days: 2,
    hours: 14,
    minutes: 45
  };

  wishlist: number[] = [1, 5]; // IDs of wishlisted products

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.startCountdown();
  }

  selectCategory(category: string): void {
    this.selectedCategory = category;
    console.log(`Selected category: ${category}`);
  }

  subscribeNewsletter(): void {
    if (this.validateEmail(this.newsletterEmail)) {
      console.log('Subscribed with email:', this.newsletterEmail);
      this.newsletterEmail = '';
      alert('Thank you for subscribing!');
    } else {
      alert('Please enter a valid email address');
    }
  }

  private validateEmail(email: string): boolean {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  addToCart(product: Product): void {
    console.log('Added to cart:', product.name);
    alert(`${product.name} added to cart!`);
  }

  buyNow(product: Product): void { // Added buyNow method
    console.log('Buying now:', product.name);
    alert(`Proceeding to checkout with ${product.name}!`);
    // Example: Navigate to a checkout page or handle the purchase flow
    // if (product.id) {
    //   this.router.navigate(['/checkout', product.id]);
    // }
  }

  toggleWishlist(productId: number): void {
    if (this.isInWishlist(productId)) {
      this.wishlist = this.wishlist.filter(id => id !== productId);
      console.log('Removed from wishlist:', productId);
    } else {
      this.wishlist.push(productId);
      console.log('Added to wishlist:', productId);
    }
  }

  isInWishlist(productId: number): boolean {
    return this.wishlist.includes(productId);
  }

  viewProduct(productId: number): void {
    this.router.navigate(['/product', productId]);
  }

  startCountdown(): void {
    setInterval(() => {
      this.countdown.minutes--;

      if (this.countdown.minutes < 0) {
        this.countdown.minutes = 59;
        this.countdown.hours--;

        if (this.countdown.hours < 0) {
          this.countdown.hours = 23;
          this.countdown.days--;

          if (this.countdown.days < 0) {
            this.countdown = { days: 0, hours: 0, minutes: 0 };
          }
        }
      }
    }, 60000); // Every minute
  }

  getStars(rating: number): { full: number; half: boolean; empty: number } {
    const full = Math.floor(rating);
    const half = rating % 1 >= 0.5;
    const empty = 5 - full - (half ? 1 : 0);
    return { full, half, empty };
  }
}