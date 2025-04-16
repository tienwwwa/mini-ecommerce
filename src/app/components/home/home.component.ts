import { Component, signal } from '@angular/core';
import { Product } from '../../dtos/product.dto';
import { ProductService } from '../../services/product.service';
import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'app-home',
  imports: [ProductComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  products = signal<Product[]>([]);
  quantity = signal(0);
  constructor(private productService: ProductService){
      this.products.set(this.productService.products);
      this.quantity.set(this.productService.cart());
  }

  increment(event: Product){
    this.productService.addToCart(event);
    this.quantity.set(this.productService.cart());
    
    
  }
}
