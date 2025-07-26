import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

@Injectable({ providedIn: 'root' })
export class CartService {
  private itemsSubject = new BehaviorSubject<CartItem[]>([]);
  items$ = this.itemsSubject.asObservable();

  get items(): CartItem[] {
    return this.itemsSubject.value;
  }

  addToCart(product: { id: number; name: string; price: number; image: string; }) {
    const items = [...this.items];
    const idx = items.findIndex(item => item.id === product.id);
    if (idx > -1) {
      items[idx].quantity++;
    } else {
      items.push({ ...product, quantity: 1 });
    }
    this.itemsSubject.next(items);
  }

  removeFromCart(productId: number) {
    let items = [...this.items];
    items = items.filter(item => item.id !== productId);
    this.itemsSubject.next(items);
  }

  clearCart() {
    this.itemsSubject.next([]);
  }
} 