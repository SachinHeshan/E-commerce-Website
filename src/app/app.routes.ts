import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { CategoriesComponent } from './pages/categories/categories';
import { NewArrivalsComponent } from './pages/new-arrivals/new-arrivals';
import { ElectronicsProductComponent } from './pages/electronics-product/electronics-product';
import { CartComponent } from './shared/cart/cart';
import { AllProductsComponent } from './pages/all-products/all-products';


export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'new-arrivals', component: NewArrivalsComponent },
  { path: 'category/electronics', component: ElectronicsProductComponent },
  { path: 'cart', component: CartComponent },
  { path: 'products', component: AllProductsComponent },
];
