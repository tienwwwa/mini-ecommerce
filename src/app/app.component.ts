import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { ProductComponent } from './components/product/product.component';
import { ProductService } from './services/product.service';
import { Product } from './dtos/product.dto';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Demo_15_04_2025';

  quantity;
  constructor(private productService: ProductService){
      this.quantity = productService.cart;
  }

}
