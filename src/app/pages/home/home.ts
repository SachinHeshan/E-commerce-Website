import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { Footer } from '../../shared/shared/footer/footer';
import { Navbar } from '../../shared/navbar/navbar';
import { CartService } from '../../shared/cart/cart.service'; // Ensure this path is correct


declare var bootstrap: any;

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
  imports: [CommonModule, RouterModule, Footer, Navbar], // CartService is a service, not a component, so it's not listed here
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
    { name: 'Sony', logo: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAgVBMVEUAAAD///9kZGTNzc1nZ2dsbGz4+PjExMSZmZnv7+/Jycm2trb09PTR0dHy8vLe3t6lpaW6urpCQkJPT09ZWVlzc3PX19fk5OS4uLgZGRktLS1KSkoODg44ODhXV1efn58eHh6NjY2Dg4N6enovLy+MjIxFRUWurq48PDwmJiYdHR0VEE55AAAEnElEQVR4nO3Ya3eqOBSAYbwFsCqgCFVs8XKsdv7/DxyEJCQQZ81acjqzZt7nS2vYgWwIyVbPAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgf2JzLt9833+Pr+PjX8Udx6dbUgUmt2D264fG9rrdNlmMWiIKPj1vHQRBN/DrlAkzMC835uFxa2o0r6fmgS/Pu5sNbfC3Ffc9YILnfNQlsmlQ/bHj0vmiHzhvczyExoH3tl9s9bh5Xtk9SxM3s9rSwfLbLfVJwzzPRf/Kje9EN6+izIiLdYiZ4cjf/UsyPMoHmJzvsiENlvaVm8urlLLrvm4oYpVQ9NGEHPzl0pgO2VF2PWXLZRO7Wi6zUzVpqob2DoX+pIlLs4k6YxVnzf9XNE8mt2f9PhadDM/q8ZkvWKAa122b8cDCe9tc38iF0eDdVNib0djcW/MaL1vXr5Yoeu2ZlWEqR5PvrSj1YMO2aWpMtIXxHB5jDw9m5zcVdtZNp/rz9uWsTNv6nKK/cO0WZoZy8oUfnahL7zmYGY7ETLfXGe6szmpOCvXKNYPpreCvkUOc9I9cjQxPciyXXpRafvQ8tTI0eswfGXZupHppRfNxI7qTdgh6/Qrnb+V5umnHsKv2dfWvHErW7/8h52miGuoMt3OdYinbXRkeVIp5faqFdaKh/LJW+JEQi9yPz2N7Nn7Ko1fHCWQueqmqM5x67dYSt3HdDL1CXd1X6U4O3tD0kmYJo9hYfNQkXTv6q/VULSp1htXr967PldSD9qv/Vvtu77HaNOLmVuVDVjLSsV/QSHOdo1z1HOtRNUYZrdYUlaGxbUx0hv1CdquC6n1C9G7BEA5tTdN1kiF+8zHfOboXMlYt8TpDvYU2HZ9kWC9o2mC7fMcle5aiXAnlSxX+4ei8eZphOwUfe3/yJEOzRJg5Dg/jUJyTLO+X1aPFwRqEa4BqR1R7mpGht9GnDDeP933V3U5relFyLWQD+NgUTS11LKbn4DbPV8IovpuHqF6WsaO/XKl0LWBm6H3plzyMHjfMtVR5h6gJ8V0HB5D0trljsS3VvG12p3t30+sPb6karAy978iaEs4MVW3z7jz4umqdFPd+s6wEZK0jlxrRH6GapLqWtDPUXf/ZDJ11RHPZefNBLZi9ibSXW3akN+puhm2BXd2hL+cQfiBDVy3Y7CGqClZ1QemMMt/QXobGYik+nUP4iQxHUXcnkrNU78DqxYzNoJ2jdWrN2dr172U4dMmtqEkUlcblx/LtOemWg/qqk+tvC7tSdBL8StNNXXxlaaXdPcdPMzym6edF7in57DNNXUXFQBnWWSZxEJQ3/QuD9U1N/7iySE6Xy7mc6M/WN6SWkU6xajLs/fYyHnX8hqrmUSHHE9G90uNBdLa/jbP0EUm7jT/NUG2MvZ8n0u7pej82vO5RUdy9IojsJIXvKKGmfvdOrG5mHuVyYrAWzg//caw3S4tsYskcG9eriul4Wk/+/az0H78RijDyy/GTr2m7y03/JrxYxq4i5z9hvy7uv+GLHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAyp+eETXqv/wiNAAAAABJRU5ErkJggg==' },
    { name: 'Bosch', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQenTjoKMQ68kRG7hvcUdysAapS02ZOxq6sTw&s' }
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
      image: 'https://images.unsplash.com/photo-1711188054419-12b41ba78951?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8JTIySGlnaCUyMFF1YWxpdHklMjBQbHVzJTIwU2l6ZSUyME51cnNpbmclMjBCcmF8ZW58MHx8MHx8fDA%3D',
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
      image: 'https://images.unsplash.com/photo-1658859186520-99b3c627675e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8U2hvZXMlMjBmb3IlMjBNZW4lMjBDYXN1YWwlMjBTbGlwJTIwb24lMjBGYXNoaW9ufGVufDB8fDB8fHww',
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
      image: 'https://images.unsplash.com/photo-1631728126283-73d842f4f4d8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8UG9ydGFibGUlMjBCbHVldG9vdGglMjBTcGVha2VyJTIwd2l0aCUyMERlZXAlMjBCYXNzfGVufDB8fDB8fHww',
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
      image: 'https://images.unsplash.com/photo-1737882171913-f4ced0ce73d8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8V2lyZWxlc3MlMjBDaGFyZ2luZyUyMFBhZHxlbnwwfHwwfHx8MA%3D%3D',
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
      image: 'https://images.unsplash.com/photo-1664714628878-9d2aa898b9e3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8U3RhaW5sZXNzJTIwU3RlZWwlMjBXYXRlciUyMEJvdHRsZXxlbnwwfHwwfHx8MA%3D%3D',
      price: 1599.00,
      oldPrice: 2499.00,
      badge: 'Eco-Friendly',
      rating: 4.5,
      sold: 300,
      discount: 36,
      deal: false,
      choice: true,
      freeShipping: 3381.28
    },
    {
      id: 12,
      name: "Men's Slim Fit Jeans",
      category: "Clothing",
      description: "Comfortable and stylish slim fit jeans for everyday wear.",
      image: 'https://images.unsplash.com/photo-1562044447-280a02d1cd22?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8TWVuJ3MlMjBTbGltJTIwRml0JTIwSmVhbnN8ZW58MHx8MHx8fDA%3D',
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
      image: 'https://images.unsplash.com/photo-1743324690280-62c0699f46d2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Q2xhc3NpYyUyMExlYXRoZXIlMjBIYW5kYmFnfGVufDB8fDB8fHww',
      price: 8999.00,
      oldPrice: 12000.00,
      badge: '',
      rating: 4.8,
      sold: 300,
      discount: 25,
      deal: true,
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

  constructor(private router: Router, private cartService: CartService) {} // Inject CartService here

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

  // Updated addToCart method to use CartService
  addToCart(product: Product): void {
    this.cartService.addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image
    });
    alert(`${product.name} added to cart!`);
  }

  // Updated buyNow method to use CartService and navigate to cart
  buyNow(product: Product): void {
    this.addToCart(product);
    this.router.navigate(['/cart']);
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

 ngAfterViewInit(): void {
    setTimeout(() => {
      const modalElement = document.getElementById('popupBanner');
      if (modalElement) {
        const popup = new bootstrap.Modal(modalElement);
        popup.show();
      }
    }, 3000); // Show after 3 seconds
  }


}
  
