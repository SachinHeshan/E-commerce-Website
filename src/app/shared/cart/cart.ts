import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CartService, CartItem } from './cart.service';
import { Navbar } from '../navbar/navbar';
import { Footer } from '../shared/footer/footer';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RouterModule, Navbar,Footer],
  templateUrl: './cart.html',
  styleUrls: ['./cart.scss']
})
export class CartComponent {
  items: CartItem[] = [];

  constructor(private cartService: CartService) {
    this.cartService.items$.subscribe(items => this.items = items);
  }

  removeItem(id: number) {
    this.cartService.removeFromCart(id);
  }

  get total(): number {
    return this.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }
} 