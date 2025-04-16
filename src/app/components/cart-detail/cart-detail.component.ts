import { Component, signal } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../dtos/product.dto';

@Component({
  selector: 'app-cart-detail',
  imports: [],
  templateUrl: './cart-detail.component.html',
  styleUrl: './cart-detail.component.css'
})
export class CartDetailComponent {
  carts = signal<Product[]>([]); 
  total = signal(0);
  constructor(private productService: ProductService){
    this.carts = productService.carts;
    this.total = productService.total;
  }

  remove(product: Product){
    this.productService.removeCart(product);
  }
}
