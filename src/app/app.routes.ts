import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CartDetailComponent } from './components/cart-detail/cart-detail.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'cart',
        component: CartDetailComponent
    }
];
